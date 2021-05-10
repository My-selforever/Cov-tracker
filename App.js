import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Country from './Screens/Country';
import Global from './Screens/Global';
import India from './Screens/India';
import Precautions from './Screens/Precautions';

export default function App() {
  return (
        <AppContainer/>
  );
}

const MatBotNav = createMaterialBottomTabNavigator({
  Global:{screen:Global,
    navigationOptions:{
      tabBarIcon:
      <Icon name="globe" type="font-awesome" color="#FE49FF"></Icon>
    }
  },
  Country:{screen:Country,
    navigationOptions:{
      tabBarIcon:
      <Icon name="home" type="font-awesome" color="#FE49FF"></Icon>
    }},
  India:{screen:India,
    navigationOptions:{
      tabBarLabel:"India",
      tabBarIcon:
      <Icon name="book" type="font-awesome" color="#FE49FF"></Icon>
    },
  },
  Precautions:{screen:Precautions,
    navigationOptions:{
      tabBarIcon:
      <Icon name="heart" type="font-awesome" color="#FE49FF"></Icon>
    }},
})

const AppContainer = createAppContainer(MatBotNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
