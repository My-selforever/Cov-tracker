import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Cards from "../Components/Card";

export default class Global extends React.Component {
    constructor(){
        super()
        this.state={
            data:'',
            date:''
        }
    }

    readData=async()=>{
        var link = 'https://api.covid19api.com/summary'
        return fetch(link)
        .then((response)=>response.json())
        .then(CaptureResponse=>{
            this.setState({data:CaptureResponse.Global,date:CaptureResponse.Global.Date})
        })
    }
    componentDidMount(){
        this.readData()
    }

  render() {
      console.log(this.state.data.Date)
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 0,
          marginTop: 40,
          backgroundColor: "#B8FFE9",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Cards
            Title="Reports"
            value={this.state.data.TotalConfirmed}
            Tcolor="#000000"
            Bcolor="#4BFFFF"
            Nvalue={this.state.data.NewConfirmed}
          ></Cards>
          <Cards
            Title="Recovered"
            value={this.state.data.TotalRecovered}
            Tcolor="#ffffff"
            Bcolor="#FF495F"
            Nvalue={this.state.data.NewRecovered}
          ></Cards>
          <Cards
            Title="Deaths"
            value={this.state.data.TotalDeaths}
            Tcolor="#F1B8FF"
            Bcolor="#8C70FF"
            Nvalue={this.state.data.NewDeaths}
          ></Cards>
        </ScrollView>
        <View>
            <View style={{flexDirection:'column'}}>
            <Text style={{ 
                 color: "#000000",
              alignSelf: "center",
              }}>
               Last Updated Date: {this.state.date.slice(0,10)} 
              </Text>
              <Text style={{ 
                 color: "#000000",
              alignSelf: "center",
              }}
              >
              Last Updated Time: {this.state.date.slice(11,16)} UTC
              </Text>
              </View>
          <Text
            style={{
              fontSize: 50,
              color: "#000000",
              alignSelf: "center",
              fontFamily: "monospace",
            }}
          >
            Global
          </Text>
          <Image
            source={require("../Components/Images/Global.jpg")}
            style={{ width: 415, height:460,marginTop:20 }}
          ></Image>
        </View>
      </View>
    );
  }
}
