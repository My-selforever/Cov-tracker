import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

export default class Precautions extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        marginLeft: 0,
        marginTop: 40,
        backgroundColor: "#B8FFE9",
      }}>
        <Header centerComponent={{ text: "About", style: style.title }} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20, fontFamily:'monospace'}}>About The Virus</Text>
          <Text style={{alignSelf:'center',marginHorizontal:30}}>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people infected with the COVID-19
            virus will experience mild to moderate respiratory illness and
            recover without requiring special treatment. Older people, and those
            with underlying medical problems like cardiovascular disease,
            diabetes, chronic respiratory disease, and cancer are more likely to
            develop serious illness. The best way to prevent and slow down
            transmission is to be well informed about the COVID-19 virus, the
            disease it causes and how it spreads. Protect yourself and others
            from infection by washing your hands or using an alcohol based rub
            frequently and not touching your face. The COVID-19 virus spreads
            primarily through droplets of saliva or discharge from the nose when
            an infected person coughs or sneezes, so it’s important that you
            also practice respiratory etiquette (for example, by coughing into a
            flexed elbow).
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 23,
    alignSelf: "center",
    color: "#ffffff",
    fontFamily: "monospace",
    fontWeight: "bold",
    padding: 10,
  },
});
