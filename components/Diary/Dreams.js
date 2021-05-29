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
  AppRegistry
} from "react-native";
import styles from "./../../styles/feedStyle";
import useGetDiary from "./../../hooks/useGetDiary";
import useSetDiary from "./../../hooks/useSetDiary"


function InsideModal({setModalVisible, modalVisible, data, date}) {
  let dreamsPrevData = ""
  if (typeof(data.dreams)== "string") {
    dreamsPrevData = data.dreams;
  }

  const [value1, onChangeText1] = React.useState(dreamsPrevData);
  const { setDreams } = useSetDiary();

  const onSubmit = () =>{
    console.log(value1)
    setDreams({variables: {date: date, dreams: value1}})
    setModalVisible(!modalVisible);
  }

  return (<View style={styles.centeredView}>
    <View style={[styles.modalView, {backgroundColor: "#eeeff1"}]}>
      <ImageBackground source={require("./../../assets/diary/dreamsBG.png")} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
      <Text style={styles.modalHeadText}>Dream Journal</Text>
      <Text style={styles.modalBodyText}>Would you like to pen down your dream from last night so you don't forget about what happened in the dream later?</Text>
      <MultilineTextInput
        multiline
        numberOfLines={3}
        onChangeText={text => onChangeText1(text)}
        placeholder={"I had a dream that..."}
        value={value1}
      />
      <Pressable
        style={[styles.button, styles.buttonClose, {backgroundColor: "#9072cb"}]}
        onPress={onSubmit}
      >
      <Text style={styles.textStyle}>Submit</Text>
      </Pressable>
      </ImageBackground>
    </View>
  </View>)
}


const MultilineTextInput = (props) => {
  return (
    <View style={{padding: 10}}>
    <TextInput
      {...props} 
      editable
      maxLength={100}
    />
    </View>
  );
}

export default function Dreams({date}) {
    const data = useGetDiary(date)
    const [modalVisible, setModalVisible] = useState(false);
  console.log("dreams:", data)
    
    return (<ImageBackground source={require("./../../assets/diary/dreams.png")} style={styles.card} imageStyle={{borderRadius: 20, resizeMode: "cover"}}>
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
          ></Pressable>
        </ImageBackground>)
  } 
