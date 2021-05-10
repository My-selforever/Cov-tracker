import React from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList  } from 'react-native';
import SLists from '../Components/Slist'
import { Header} from 'react-native-elements';
export default class India extends React.Component{
constructor(){
    super();
    this.state={
        states:'',
        loading:true,
    }
}

    componentDidMount = async () => {
        var link =
          "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
        return fetch(link)
          .then((response) => {
           return response.json();
          })
          .then((captureResponse) => {
            this.setState({ states: captureResponse.regionData,loading:false });
          });
      };
    
      render() {
         if(this.state.loading==false)
         {
        return (
        
            <View
              style={{
                backgroundColor: "#fafafa",
                
              }}
            >
               <Header
            centerComponent={{
              text: 'Indian States',
              style: style.title,
            }}
          ></Header>
          <View style={{marginTop:10}}>
                    <FlatList
          data={this.state.states}
          renderItem={({ item }) => {
          return <SLists state = {item}></SLists>
          }}
        />
        </View>
            </View>
        );}
        else{
          return(
          <View style={{ marginTop: 450 }}>
          <ActivityIndicator size={"large"} color={"#0000ff"} />
        </View>
          )
        }
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