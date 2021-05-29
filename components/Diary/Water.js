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
  TextInput
} from "react-native";
import styles from "./../../styles/feedStyle"
import useGetDiary from "./../../hooks/useGetDiary"
import useSetDiary from "./../../hooks/useSetDiary"


function OnCard({data}) {
    return (
        <View style={{justifyContent: "center", alignItems:"center", margin: "auto", height: "100%", width: "100%"}}>
            <Text style={{fontSize: 35, color: "#488ac7", fontWeight: "600", marginTop: 14}}>{data.water || 0}</Text>
        </View>
    )
}

function InsideModal({setModalVisible, modalVisible, date, data}) {
  const { setWater } = useSetDiary();
  const [number, onChangeNumber] = useState(data.water);

  const onSubmit = () => {
    setWater({variables: {date: date, water: number}})
    setModalVisible(!modalVisible);
  }

    return (<View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor: "#e7f7fa"}]}>
      <ImageBackground source={require("./../../assets/diary/waterBG.png")} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
        <Text style={styles.modalHeadText}>Water Intake Diary</Text>
        <Text style={styles.modalBodyText}>Keep track of how much water you consume: [1 glass = 250 ml]</Text>
        <TextInput
        style={styles.input}
        onChangeText={(number) => onChangeNumber(number)}
        value={number}
        placeholder="Enter number of glasses"
        keyboardType="numeric"
      />
        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor: "#2b9ef0"}]}
          onPress={onSubmit}
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        </ImageBackground>
      </View>
    </View>)
  }

export default function Water({date}) {
    const [modalVisible, setModalVisible] = useState(false);
    const data = useGetDiary(date)
    
    return (<ImageBackground source={require("./../../assets/diary/water.png")} style={styles.card} imageStyle={{borderRadius: 20, resizeMode: "cover"}}>
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <InsideModal data={data} date={date} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          ><OnCard data={data}/></Pressable>
        </ImageBackground>)
  } 
