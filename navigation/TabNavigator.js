import React from 'react'
import { View, Text, Animated, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import {focused} from '@react-navigation/native'
import FeedNavigator from './FeedNavigator'
import HomePageNavigator from './HomePageNavigator'
import CalendarNavigator from './CalendarNavigator'
import DiariesNavigator from './DiariesNavigator'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import AddButton from '../components/AddButton'



const Tab = createBottomTabNavigator()
 
export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='HomePage'
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          backgroundColor: 'purple',
          height: 70,
          ...styles.shadow
        },
      }}
    >

    <Tab.Screen
        name = "Calendar"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/Icons/calendar.svg')}
                resizeMode = 'contain'
                style={{                
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'white'
                }}
              />
            </View>
          )
        }}
      />
    <Tab.Screen
        name = "HomePage"
        component={HomePageNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/Icons/home.svg')}
                resizeMode = 'contain'
                style={{                
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'white'
                }}
              />
            </View>
          )
        }}
      />
 
    <Tab.Screen
      name = "Diaries"
        component={DiariesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/Icons/book.svg')}
                resizeMode = 'contain'
                style={{                
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'white'
                }}
              />
            </View>
          )
        }}
      />
    <Tab.Screen
      name = "Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/Icons/apps-outline.svg')}
                resizeMode = 'contain'
                style={{                
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'black' : 'white'
                }}
              />
            </View>
          )
        }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})
