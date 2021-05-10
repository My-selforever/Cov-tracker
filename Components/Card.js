import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default class Cards extends React.Component {

  render() {
    return (
      <View
        style={{
            justifyContent:'center',
          backgroundColor: this.props.Bcolor,
          width: 150,
          height:120,
          borderRadius:10,
          marginHorizontal:10,
          marginTop:20
        }}
      >
                  <Text
          style={{
            fontSize: 15,
            fontFamily: "monospace",
            fontWeight: "bold",
            color: this.props.Tcolor,
            alignSelf:'center'
          }}
        >
          {this.props.Title}: 
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "monospace",
            fontWeight: "bold",
            color: this.props.Tcolor,
            alignSelf:'center'
          }}
        >
          {this.props.value}
        </Text>
        
          <Text
          style={{
            fontSize: 15,
            fontFamily: "monospace",
            fontWeight: "bold",
            color: this.props.Tcolor,
            alignSelf:'center'
          }}
        >
          New {this.props.Title}: 
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "monospace",
            fontWeight: "bold",
            color: this.props.Tcolor,
            alignSelf:'center'
          }}
        >
          {this.props.Nvalue}
        </Text>


      </View>
    );
  }
}
