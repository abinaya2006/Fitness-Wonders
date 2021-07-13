import React from 'react'
import {View,Text} from 'react-native'
import {createAppContainer,createSwitchNavigator}  from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import SettingScreen from './Screens/SettingsScreen'
import { AppDrawerNavigator } from './Components/AppDraweNavigation'

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>
      
    )
  }
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  // HomeScreen:{screen:SettingScreen}
  HomeScreen:{screen:HomeScreen},
  Drawer: { screen: AppDrawerNavigator }


})

const AppContainer = createAppContainer(switchNavigator)


