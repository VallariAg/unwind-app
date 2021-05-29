import React from 'react';
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
      <SafeAreaView style={styles.container}>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
<Text> aa</Text>
         <Diary/>
{/* <Text> bb</Text> */}
<Text> bb</Text>
      </SafeAreaView>
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
