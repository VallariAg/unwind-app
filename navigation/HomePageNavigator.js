import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Text, View} from 'react-native'
import App from '../screens/homePage'
import AddEntry from '../components/AddEntry'
import AddPromptEntry from '../components/AddPromptEntry'
import AddMood from '../components/AddMood'
  

const Stack = createStackNavigator()

export default function HomePageNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#8459d9', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, elevation: 0 },
        headerTintColor: 'white',
      
    }}
  >
    <Stack.Screen
      name="Unwind"
        component={App}
      />
     <Stack.Screen
      name="AddEntry"
        component={AddEntry}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
      name="AddPromptEntry"
        component={AddPromptEntry}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
      name="AddMood"
        component={AddMood}
        options={{
          headerShown: false
        }}
      />
      
  </Stack.Navigator>      
  )
}