import * as React from 'react';
import { ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function AddEntry({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <ImageBackground
      source={require('../assets/images/PromptNote.png')}
      style={{ height: '100%', width: '100%' }}
    >
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}> 30 May 2021</Text>
      </View>
      <View style={styles.pageHeading}>
        <Text style={styles.pageHeadingText}>What was the highlight of your day?</Text>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder=" Enter your note here ..."
      />
      </View>
      {/* <View style={styles.doneButtonWrapper}>
        <Button
          style={styles.doneButton}
          title='Done'
        />
      </View> */}
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
    marginTop: 100,
    alignItems: 'center',
    marginTop: 30
  },
  doneButton: {
    backgroundColor: '#f54c6e',
    padding: 5,
    borderRadius: 10,
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  doneButtonText: {
    fontSize: 20,
    // backgroundColor: 'yellow'
  },

}) 





