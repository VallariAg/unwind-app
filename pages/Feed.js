// to use import <FeedView />

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
import YoutubePlayer from "react-native-youtube-iframe";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    color: "#f9c2ff",
  },
];

const CARDS = [
  {
    id: "Mental Health",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(14).png",
    vids: [
      {
        id: "1",
        vidID: "F2hc2FLOdhI",
      },
      {
        id: "3",
        vidID: "0QXmmP4psbA",
      },
      {
        id: "4",
        vidID: "49mfPFTZsHs",
      },
      {
        id: "5",
        vidID: "z-IR48Mb3W0",
      },
      {
        id: "6",
        vidID: "IzFObkVRSV0",
      },
      {
        id: "7",
        vidID: "rkZl2gsLUp4",
      },
      {
        id: "2",
        vidID: "DxIDKZHW3-E",
      },
      {
        id: "8",
        vidID: "gy1iH_Gxn0Q",
      },
    ],
  },
  {
    id: "Sleep Journal",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(6).png",
    vids: [
      {
        id: "1",
        vidID: "gedoSfZvBgE&ab_channel=TED-EdTED-EdVerified",
      },
      {
        id: "2",
        vidID: "fk-_SwHhLLc",
      },
      {
        id: "3",
        vidID: "t0kACis_dJE",
      },
      {
        id: "4",
        vidID: "Oq28WJpZfLg",
      },
      {
        id: "5",
        vidID: "236eHGCSPvI",
      },
    ],
  },
  {
    id: "Following Schedule",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(10).png",
    vids: [
      {
        id: "1",
        vidID: "NKOeL8KJkJM",
      },
      {
        id: "2",
        vidID: "LQ8JOsc3-wU",
      },
      {
        id: "3",
        vidID: "gDNDlPejKr4",
      },
      {
        id: "4",
        vidID: "Y9A5wuTtblw",
      },
    ],
  },
  {
    id: "Why should we seek help",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(12).png",
    vids: [
      {
        id: "1",
        vidID: "9FbBwehUp5Q",
      },
      {
        id: "2",
        vidID: "9B-wTp2PZH8",
      },
      {
        id: "3",
        vidID: "EUJ4j6_ypE0",
      },
      {
        id: "4",
        vidID: "uY7dK9KnpgI",
      },
      {
        id: "5",
        vidID: "VuKuQx-qOnQ",
      },
      {
        id: "6",
        vidID: "u4t9Bx3Uo-s",
      },
    ],
  },
  {
    id: "Journalling",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(7).png",
    vids: [
      {
        id: "1",
        vidID: "QFcD-_Nx3qY",
      },
      {
        id: "2",
        vidID: "n48E_Ffn1Rg",
      },
      {
        id: "3",
        vidID: "ym6OYelD5fA",
      },
    ],
  },
  {
    id: "Hydration",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(9).png",
    vids: [
      {
        id: "1",
        vidID: "31F0laJjyy8",
      },
      {
        id: "2",
        vidID: "EmNieKLjmH4",
      },
      {
        id: "3",
        vidID: "WIAWUW1R9_Y",
      },
      {
        id: "4",
        vidID: "orJd-05Px7I",
      },
    ],
  },
  {
    id: "Physical Activity",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(16).png",
    vids: [
      {
        id: "1",
        vidID: "wUEl8KrMz14&ab_channel=TED-EdTED-EdVerified",
      },
      {
        id: "2",
        vidID: "ZofSVuSnCFk",
      },
      {
        id: "3",
        vidID: "djcuGZBOCoY",
      },
      {
        id: "4",
        vidID: "BHY0FxzoKZE",
      },
      {
        id: "5",
        vidID: "KEhbYNmY3N4",
      },
      {
        id: "6",
        vidID: "GNWaWJm1A1g",
      },
    ],
  },
  {
    id: "More...",
    img: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(13).png",
    vids: [
      {
        id: "1",
        vidID: "WuyPuH9ojCE&ab_channel=TED-EdTED-EdVerified",
      },
      {
        id: "2",
        vidID: "vzKryaN44ss",
      },
      {
        id: "3",
        vidID: "ZQNk7KVU_6A",
      },
      {
        id: "4",
        vidID: "w6T02g5hnT4",
      },
      {
        id: "5",
        vidID: "WPPPFqsECz0",
      },
      {
        id: "6",
        vidID: "b7l5UQSKHRU",
      },
    ],
  },
];

const Video = ({ vidID }) => (
  <View backgroundColor={"black"}>
    <YoutubePlayer height={230} videoId={vidID} />
  </View>
);

function Card({ indx }) {
  const [modalVisible, setModalVisible] = useState(false);

  const renderVideo = ({ item }) => <Video vidID={item.vidID} />;

  return (
    <View style={styles.card}>
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
                style={{height: 30, width: 50, flex: 1}}
                source={{
                  uri: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(15).png"
                }}
              />
            </Pressable>
            <FlatList
              data={CARDS[indx].vids}
              renderItem={renderVideo}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <Image
          style={styles.card}
          source={{
            uri: CARDS[indx].img,
          }}
        />
      </Pressable>
    </View>
  );
}

export default function FeedView() {
  const renderItem = ({}) => (
    <View style={styles.list}>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <Card indx={0} />
        <Card indx={1} />
        <Card indx={2} />
        <Card indx={3} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <Card indx={4} />
        <Card indx={5} />
        <Card indx={6} />
        <Card indx={7} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
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
