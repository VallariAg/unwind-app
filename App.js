import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HASURA_SECRET } from '@env'

import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './index'

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
  },
});
