import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
  Image,
} from "react-native";

import { Calendar } from 'react-native-calendars';

export default function CalendarPage() {
	const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
			<Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { flex: 1 }]}>
          <Pressable
            style={{
              backgroundColor: "black",
              height: 50,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Image
              style={{ height: 30, width: 50, flex: 1 }}
              source={{
                uri: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(15).png",
              }}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
      <Calendar
        style={{borderColor: 'white'}}
        onDayPress={(day) => setModalVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    flexDirection: "row",
    height: 850,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  card: {
    marginVertical: 3,
    height: 200,
    borderRadius: 20,
  },
  modal: {
    backgroundColor: "white",
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  centeredView: {
    flex: 1,
    justifyContent: undefined,
    alignItems: undefined,
    margin: 0,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    alignItems: undefined,
    height: Dimensions.get("window").height,
  },
  button: {
    flex: 1,
    borderRadius: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});