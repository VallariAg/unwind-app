import React from 'react'
import { View, Text, Animated, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedNavigator from './FeedNavigator'
import HomePageNavigator from './HomePageNavigator'
import CalendarNavigator from './CalendarNavigator'
import DiariesNavigator from './DiariesNavigator'

const Tab = createBottomTabNavigator()
 
export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='HomePage'
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'relative',
          elevation: 0,
          borderRadius: 15,
          backgroundColor: 'purple',
          height: 70,
        },
      }}
    >
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

