import * as React from 'react';
import { ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function AddEntry({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <ImageBackground
      source={require('../assets/images/textNote.png')}
      style={{ height: '100%', width: '100%' }}
    >
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}> 29 May 2021</Text>
      </View>
      <View style={styles.pageHeading}>
        <Text style={styles.pageHeadingText}>What is on your mind right now?</Text>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=" Enter your text here ..."
      />
      </View>
      <View style={styles.doneButtonWrapper}>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            navigation.navigate('Unwind');

          }}
        >
          <Text style={styles.doneButtonText}> Done </Text>
        </TouchableOpacity>
      </View>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  
  dateWrapper: {
    // backgroundColor: 'black',
    marginTop: 30,
  },
  dateText: {
    fontSize: 24,
    paddingStart: 20,
  },
  pageHeading: {
    // backgroundColor: 'purple',
    marginTop: 50,
    padding: 20,

  },
  pageHeadingText: {
    fontSize: 40,
    // backgroundColor: 'yellow'
  },
  inputWrapper: {
    padding: 20,
    // marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 50
  },
  doneButtonWrapper: {
    alignItems: 'center',
    marginTop: 100
  },
  doneButton: {
    backgroundColor: '#f54c6e',
    padding: 5,
    borderRadius: 10,
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  doneButtonText: {
    fontSize: 20,
    // backgroundColor: 'yellow'
  },

}) 







