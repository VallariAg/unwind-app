import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/homePage'

import { Text, View} from 'react-native'

  
const Unwind = () => (
  <View>
    <Text> This is a screen. </Text>
  </View>
)

const Stack = createStackNavigator()

export default function HomePageNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'purple', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen
      name="Unwind"
        component={HomePage}
    />
  </Stack.Navigator>      
  )
}