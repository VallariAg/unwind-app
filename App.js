import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './index'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Diary from "./pages/Diary";
import { HASURA_SECRET } from '@env'


// Initialize Apollo Client
const client = new ApolloClient({
  uri: `https://working-hermit-94.hasura.app/v1/graphql`,
  headers: {
    'x-hasura-admin-secret': HASURA_SECRET
  },
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </ApolloProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100",
    margin: 0,
    marginTop: StatusBar.curr || 0,
    // marginTop: StatusBar.currentHeight || 0,
      justifyContent: 'center',
  },
});
