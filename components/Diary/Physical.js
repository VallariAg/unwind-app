import React, { useState, useCallback } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  Button,
  Alert
} from "react-native";
import styles from "./../../styles/feedStyle"
import useGetDiary from "./../../hooks/useGetDiary"
import useSetDiary from "./../../hooks/useSetDiary"


function OnCard({ data }) {
    return (
        <View style={{justifyContent: "center", alignItems:"center", margin: "auto", height: "100%", width: "100%"}}>
            <Text style={{fontSize: 26, top: 25, position: "absolute", color: "#3e424b", fontWeight: "600"}}>{ (data.physicalActivity == 0 ? "not yet" : "done") || " " } </Text>
        </View>
    )
}

function InsideModal({setModalVisible, modalVisible, date}) {
    const { setPhysical } = useSetDiary();
    const [ physicalAct, setphysicalAct ] = useState(0)

  

    const onSubmit = () => {
      setPhysical({ variables: { date: date, work: physicalAct}})
      setModalVisible(!modalVisible);
    }


    return (<View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor: "#f7f6eb"}]}>
      <ImageBackground source={require("./../../assets/diary/fitnessBG.png")} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
        <Text style={styles.modalHeadText}>Physical Fitness Diary</Text>
        <View>
      <Text style={[styles.modalBodyText, {backgroundColor: "#f7f6eb"}]}>
        Did you do some physical activity, like running, jogging, rope skipping, cycling, etc. today?
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="No"
          color="#ed4559"
          onPress={() => setphysicalAct(0)}
        />
        <Button
          title="Yes"
          onPress={() => setphysicalAct(1)}
        />
      </View>
    </View>
        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor: "#4acb13"}]}
          onPress={onSubmit}
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        </ImageBackground>
      </View>
    </View>)
  }

export default function PhysicalActivity({date}) {
    const [modalVisible, setModalVisible] = useState(false);
    const data = useGetDiary(date)
    
    return (<ImageBackground source={require("./../../assets/diary/fitness.png")} style={styles.card} imageStyle={{borderRadius: 20, justifyContent: "center", resizeMode: "cover"}}>
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <InsideModal date={date} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          ><OnCard data={data} /></Pressable>
        </ImageBackground>)
  } 
