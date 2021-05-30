import * as React from 'react';
import { TextInput, TouchableOpacity, Image} from 'react-native';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';

export default function AddMood({ navigation }) {

  let date = new Date()

  return (
    <ScrollView>
      <View style={{backgroundColor:'lavendar'}}>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>30 May 2021</Text>
      </View>
      <View style={styles.pageHeading}>
        <Text style={styles.pageHeadingText}>How are you feeling right now?</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/happy.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/relaxed.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Relaxed</Text>
          </TouchableOpacity><TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/delighted.jpg')} style={styles.mood} />
            <Text style={styles.MoodText}>Delighted</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/good.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Good</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/angry.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Angry</Text>
          </TouchableOpacity><TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/stressed.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Stressed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/sad.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/bored.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Bored</Text>
          </TouchableOpacity><TouchableOpacity style={{ flexDirection: 'column',  alignItems: 'center'}} onPress={() => {
            navigation.navigate('Unwind');
          }} >
            <Image source={require('../assets/emojis/anxious.png')} style={styles.mood} />
            <Text style={styles.MoodText}>Anxious</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View >
      </ScrollView>
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
  },
  doneButton: {
    backgroundColor: 'pink',
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
  column: {
    flexDirection: 'column',
    marginBottom: 20,
    // backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  mood: {
    height: 100,
    width: 100,
    borderRadius: 20
    // backgroundColor: 'pink'
  },
  MoodText: {
    fontSize: 20
  }
}) 