import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CalendarPage from '../pages/CalendarPage' 

import { Text, View} from 'react-native'

  
const Calendar = () => (
  <View>
    <Text> This is a screen. </Text>
  </View>
)

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
      name="Calendar"
      component= {CalendarPage}
    />
  </Stack.Navigator>      
  )
}
