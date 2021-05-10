import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Lists from "../Components/Clist";
import {Header,SearchBar} from 'react-native-elements'
export default class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      alldata: "",
      search:'',
      arrdata:[],
    };
  }

  SearchFilterFunction = (text)=>{
  
    //passing the inserted text in textinput
    const newData = this.state.arrdata.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.Country ? item.Country.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      alldata: newData,
      search: text,
    });
  }

  fetchData = async()=>{
    var link = "https://api.covid19api.com/summary";
    return fetch(link)
      .then((response) => response.json())
      .then((CaptureResponse) => {
        this.setState({ alldata: CaptureResponse.Countries });
      });

  }

  componentDidMount = async () => {
   await this.fetchData();
   var arr =[]
    for (i in this.state.alldata)
    {
      arr.push(this.state.alldata[i])
    }
    await this.setState({
      arrdata: arr
    })
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          backgroundColor: "#B8FFE9",
        }}
      >

        <Header centerComponent={{text:'Country Data',style:style.title}}/>

        <SearchBar
          round
          searchIcon={{ size: 25 }}
          onChangeText={async (text) => {this.SearchFilterFunction(text)}}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          lightTheme
        />

        <FlatList
          data={this.state.alldata}
          renderItem={({ item }) => {
            var link =
              "https://www.countryflags.io/" +
              item.CountryCode +
              "/flat/64.png";
            return <Lists Img={link} country={item.Country} itm={item}></Lists>;
          }}
        />
      </View>
    );
  }
        }

    
const style = StyleSheet.create({
    title: {
        fontSize: 23,
        alignSelf: "center",
        color: "#ffffff",
        fontFamily:'monospace',
        fontWeight:'bold',
        padding:10
      },
    
})
