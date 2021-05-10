import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
export default class Lists extends React.Component {
    constructor(props){
        super(props)
        this.state={
        data : this.props.itm,
        d : '',
        r : '',
        c : '',
        }
    }

    componentDidMount=()=>{
        
    }

  render() {
    
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fafafa",
            marginTop: 10,
            height: 225,
            width: 400,
            borderRadius: 5,
            borderWidth: 2,
            borderStyle: "dashed",
          }}
        >
          <View>
            <Image
              source={{ uri: this.props.Img }}
              style={{ width: 50, height: 20, marginTop: 10, padding: 50 }}
            ></Image>
            <View style={{marginLeft:5}}>
            <Text>
                Recovered = {this.state.r}
                </Text>
                <Text style={{marginLeft:9}}>
                Reported = {this.state.c}
                </Text>
                <Text style={{marginLeft:3}}>
                Deceased = {this.state.d}
            </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "monospace",
                fontWeight: "bold",
                padding: 15,
              }}
            >
              {this.props.country}
            </Text>

            <DropDownPicker
              items={[
                {
                  label: "New Data",
                  value: "new",
                },
                {
                  label: "Total Data",
                  value: "total",
                },
              ]}
              defaultValue={"select"}
              containerStyle={{ height: 30, marginTop: -15, width: 150 }}
              dropDownStyle={{ backgroundColor: "#B8FFf9" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              style={{ backgroundColor: "#B8FFf9" }}
              onChangeItem={async (item)=>{
                  if(item.value==="new")
                  {
                   await this.setState({
                    d : this.state.data.NewDeaths,
                    r : this.state.data.NewRecovered,
                    c : this.state.data.NewConfirmed,
                    })
                  }
                else if(item.value==="total")
                  {
                   await this.setState({
                    d : this.state.data.TotalDeaths,
                    r : this.state.data.TotalRecovered,
                    c : this.state.data.TotalConfirmed,
                    })
                  }
              }}
            ></DropDownPicker>
          </View>
        </View>
      </View>
    );
  }
}
