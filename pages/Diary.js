import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import styles from "./../styles/feedStyle"
import SleepComponent from "./../components/Diary/Sleep";
import GratitudeComponent from "./../components/Diary/Gratitude";
import WaterComponent from "./../components/Diary/Water";
import DreamsComponent from "./../components/Diary/Dreams";
import PhysicalActivityComponent from "./../components/Diary/Physical";
import useGetDiary from "./../hooks/useGetDiary";
import useMakeDiary from "./../hooks/useMakeDiary";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    color: "#f9c2ff",
  },
];

export default function FeedView() {
  let date = new Date();
  date = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate()
  const data = useGetDiary("2021-05-29")

  // if (data == "none") {
  //   setData(useMakeDiary("2021-05-26"));
  // }
  console.log(date)
  const renderItem = ({}) => (
    <SafeAreaView style={styles.list}> 
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <SleepComponent date={date} data={data}/>
        <GratitudeComponent date={date} data={data} />
        <DreamsComponent date={date} data={data} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <WaterComponent date={date} data={data} />
        <PhysicalActivityComponent date={date} data={data} />
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
