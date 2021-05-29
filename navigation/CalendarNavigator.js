import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

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
      headerStyle: { backgroundColor: 'purple', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen
      name="Calendar"
      component= {Calendar}
    />
  </Stack.Navigator>      
  )
}