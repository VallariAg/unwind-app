import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './navigation/TabNavigator'
import Splash from './screens/splashScreen'


const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false       
      }}
    >
      <AppStack.Screen
        name='splash screen'
        component={Splash}
      />
      <AppStack.Screen
        name='Tab Navigator'
        component={TabNavigator}
      />
    </AppStack.Navigator>
  )
}

