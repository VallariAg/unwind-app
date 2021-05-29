import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
// import AddEntry from '../components/AddEntry';
// import BottomSheet from 'reanimated-bottom-sheet';

// import Animated from 'react-native-reanimated';


const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/images/1413983.jpg'),
    messageTime: '4 mins ago',
    messageText: false
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: 'none',
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: 'none',
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: 'none',
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: 'none',
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post.',
  },
];

const TextNote = ({ item }) => {
  return (
    <View style={styles.textWrapper}>                
    <Text style={styles.messageText}>{item.messageText}</Text>
  </View >  
  )
}

const ImageNote = ({ item }) => {
  return (
    <View style={styles.entryImgWrapper}>
      <Image
        source={item.userImg}
        style={styles.entryImg}
      />
    </View >
  )
}

const MessagesScreen = ({ navigation }) => {
  
//   const renderInner = () => (
//     <View style={styles.panel}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.panelTitle}>Add note</Text>
//         <Text style={styles.panelSubtitle}>Choose type of note S</Text>
//       </View>
//       <TouchableOpacity style={styles.panelButton} >
//         <Text style={styles.panelButtonTitle}>Add Photo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.panelButton} >
//         <Text style={styles.panelButtonTitle}>Add Text Note</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => bs.current.snapTo(1)}>
//         <Text style={styles.panelButtonTitle}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const renderHeader = () => (
//     <View style={styles.header}>
//       <View style={styles.panelHeader}>
//         <View style={styles.panelHandle} />
//       </View>
//     </View>
//   );

//   let bs = React.useRef(null);
//   let fall = new Animated.Value(1);

  return (
    <ScrollView>
      <View style={styles.wrapper}>
      <View style={styles.motivationImgWrapper}>
          <Image
            style={styles.motivationImg}
            source={require('../assets/images/1413983.jpg')}
          />
        </View>
        <View style={styles.addButtonWrapper}>
        <TouchableOpacity >
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Add a note</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity > 
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Add a note</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity >
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </View>
        </TouchableOpacity>
        </View>
      <View style={styles.container}>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
            renderItem={({ item }) => (    
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                <View style={styles.userInfo}>
                  <View style={styles.userInfoText}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.postTime}>{item.messageTime}</Text>
                  </View>
                </View>
               { item.messageText ? <TextNote item={item} /> : <ImageNote item={item} />}
              </TouchableOpacity>       
          )}
        />
      </View >
      </View>
    </ScrollView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white'
  },
  motivationImgWrapper: {
    marginTop: 20,
  },
  motivationImg: {
    width: '100%',
    opacity: .75,
    height: 150,
    resizeMode: 'cover'
  },
  addButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    
  },
  addButton: {
    height: 80,
    width: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 14,
  },
  container: {
    flex: 1, 
    // alignItems: 'center', 
    paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: 'white',
    marginTop: 20
  },
  card: {
    width: '100%',
    backgroundColor: 'lavender',
    marginBottom: 10,
    // borderRadius: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  userInfo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginLeft: 20,
    marginTop: 20, 
  },
  userInfoText: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // marginBottom: 5,
    // backgroundColor: 'yellow'
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    // backgroundColor: 'orange'
    // fontFamily: 'LatoRegular'
  },
  postTime: {
    paddingStart: 50,
    fontSize: 12,
    // backgroundColor: 'pink'
  },

  textWrapper: {
    // flexDirection: 'column',
    // justifyContent: 'right',
    // padding: 15,
    marginStart: 20,
    marginBottom: 10,
    width: "80%",
    // backgroundColor: 'blue'
  },

  messageText: {
    fontSize: 14,
    // backgroundColor: 'green'
  },
  entryImgWrapper: {
    marginStart: 20,
    marginBottom: 20,
    width: "80%",
    // backgroundColor: 'yellow'
  },
  entryImg: {
    height: 150,
    width: 150,
    borderRadius: 20,
    // backgroundColor: 'orange'
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
    // backgroundColor: 'black'
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    // backgroundColor: 'black',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    // backgroundColor: 'yellow'
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});

