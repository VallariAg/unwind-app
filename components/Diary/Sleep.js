import React, { useState, useCallback } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  Dimensions,
  ImageBackground,
  TextInput,
  Animated, 
  Button
} from "react-native";
import styles from "./../../styles/feedStyle"
import { Slider } from 'react-native-elements';
import useGetDiary from "./../../hooks/useGetDiary";


function OnCard({ data }) {
  let timeWokeUp = (!data.timeToBed) ? timeToBed = "--:--": data.timeToBed.substring(0,5);
  let timeToBed = (!data.timeToBed) ? "--:--" : data.timeToBed.substring(0,5);  

    return (
        <View style={{justifyContent: "center", alignItems:"center", margin: "auto", height: "100%", width: "100%"}}>
            <Text style={{fontSize: 20, top:10, left: 10, position: "absolute", color: "gray"}}>{data.sleepQuality}/5</Text>
            <Text style={{fontSize: 30, color: "#3e424b", fontWeight: "600"}}>{data.sleepQuantity} hrs</Text>
            <Text style={{fontSize: 15, color: "gray"}}>{timeToBed} to {timeWokeUp}</Text>
            <Text style={{fontSize: 15, bottom: 10, right: 10, position: "absolute", color: "gray"}}>Breaks: {data.timeWokeUpBtwSleep}</Text>
        </View>
    )
}

const Separator = () => (
  <View style={styles.separator} />
);

function InsideModal({setModalVisible, modalVisible, data}) {
  const [sleephrs, onChangeSleepHrs] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const [timeswokeup, onChangeTimesWokeUp] = React.useState(null);


    return (<View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor: "#f7f6eb"}]}>
        <ImageBackground source={require("./../../assets/diary/sleepBG.png")} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
        <Text style={styles.modalHeadText}>Sleep Track Diary</Text>
        <Separator/>
        <Text>How many hours did you sleep last night? </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeSleepHrs}
        value={sleephrs}
        placeholder="Enter hours of sleep"
        keyboardType="numeric"
      />
  <Separator/>
  <Text>How many times did you wake up from sleep last night? </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeTimesWokeUp}
        value={timeswokeup}
        placeholder="Enter number times you woke up"
        keyboardType="numeric"
      />
      <Separator/>
<Text>Rate the quality of your sleep: </Text>
      <Slider
    value={value}
    onValueChange={setValue}
    maximumValue={10}
    minimumValue={1}
    step={1}
    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
    thumbStyle={{ height: 20, width: 20, backgroundColor: '#f0d62b' }}
  />
  <Text>Value: {value}</Text>
  <Separator/>

        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor: "#f0d62b"}]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        </ImageBackground>
      </View>
    </View>)
  }


export default function Sleep() {
    const [modalVisible, setModalVisible] = useState(false);

    let today = new Date()
    today = today.getFullYear() + "-" + today.getUTCMonth() + "-" + today.getUTCDate()
    
    const todayData = useGetDiary("2021-05-25")

    return (<ImageBackground source={require("./../../assets/diary/sleep.png")} style={styles.card} imageStyle={{borderRadius: 20, resizeMode: "cover"}}>
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <InsideModal data={todayData} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          ><OnCard data={todayData} /></Pressable>
        </ImageBackground>)
  } 
