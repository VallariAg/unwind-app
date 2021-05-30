import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Text, View} from 'react-native'
import Diaries from './../pages/Diary'

  
// const Diaries = () => (
//   <View>
//     <Text> This is a screen. </Text>
//   </View>
// )

const Stack = createStackNavigator()

export default function HomePageNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#8459d9', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen
      name="Diaries"
      component= {Diaries}
    />
  </Stack.Navigator>      
  )
}