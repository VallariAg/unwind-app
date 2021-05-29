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
import styles from "./../../styles/feedStyle"
import useDiary from "./../../hooks/useSetDiary"
import useGetDiary from "./../../hooks/useGetDiary"


function OnCard() {
    return (
        <View style={{justifyContent: "center", alignItems:"center", margin: "auto", height: "100%", width: "100%"}}>
                
        </View>
    )
}

function InsideModal({setModalVisible, modalVisible, data, date}) {
    const { setGratitude } = useDiary();
    let gratitudePrevData = ["", "", ""]

    if (typeof(data.gratitude)== "string") {
      gratitudePrevData = data.gratitude.split("/-/")
    }

    const [value1, onChangeText1] = React.useState(gratitudePrevData[0] || '');
    const [value2, onChangeText2] = React.useState(gratitudePrevData[1] || "");
    const [value3, onChangeText3] = React.useState(gratitudePrevData[2] || "");
    
    const onSubmit = () => {
      let text = value1 + "/-/" + value2 + "/-/" + value3
      setGratitude({ variables: { date: date, gratitude: text}})
      setModalVisible(!modalVisible);
    }
    
    return (
      <View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor: '#F8F3F3'}]}>
      <ImageBackground source={require("./../../assets/diary/gratitudeBG.png")} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
        <Text style={styles.modalHeadText}>Gratitude Diary</Text>
        <Text style={styles.modalBodyText}>List 3 things you are grateful for today: </Text>
         <MultilineTextInput
        multiline
        numberOfLines={3}
        onChangeText={text => onChangeText1(text)}
        value={value1}
        placeholder={"I am grateful for..."}
      />
        <MultilineTextInput
        multiline
        numberOfLines={3}
        onChangeText={text => onChangeText2(text)}
        value={value2}
        placeholder={"I am grateful for..."}
      />
        <MultilineTextInput
        multiline
        numberOfLines={3}
        onChangeText={text => onChangeText3(text)}
        value={value3}
        placeholder={"I am grateful for..."}
      />
        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor: "#eb3452"}]}
          onPress={onSubmit}
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        </ImageBackground>
      </View>
    </View>
    
    )
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

export default function Gratitude({date}) {
    const [modalVisible, setModalVisible] = useState(false);
    const data = useGetDiary(date)

    
    return (<ImageBackground source={require("./../../assets/diary/gratitude.png")} style={styles.card} imageStyle={{borderRadius: 20, resizeMode: "cover"}}>
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
            <InsideModal date={date} data={data} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          ><OnCard/></Pressable>
        </ImageBackground>)
  } 
