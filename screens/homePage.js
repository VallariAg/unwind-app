import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';


const Messages = [
  {
    id: '1',
    userName: '30 May 2021',
    messageTime: '7:31 AM',
    messageText: 'Woke up feeling energetic, and happy. Yay! :D'
  },
  {
    id: '2',
    userName: '30 May 2021',
    userImg: 'none',
    messageTime: '10:31 AM ',
    messageText:
      'Wohoo! I am done w my to-do list! Gotta complete that project by EOD!',
  },
  {
    id: '3',
    userName: '30 May 2021',
    userImg: 'none',
    messageTime: '11:30 AM',
    messageText:
      'Chess is so cool!',
  },
  {
    id: '4',
    userName: '30 May 2021',
    userImg: 'none',
    messageTime: '11:31 AM',
    messageText:
      'What was the highlight of your day?    Morning walk with my dog! <3',
  },
  {
    id: '5',
    userName: '30 May 2021',
    userImg: 'none',
    userImg: require('../assets/emojis/anxious.png'),
    messageTime: '11:31 AM',
    messageText:
      '',
  },
];

const Messages29 = [
  {
    id: '1',
    userName: '29 May 2021',
    messageTime: '7:45 AM',
    messageText: 'So the weekend starttss!'
  },
  {
    id: '2',
    userName: '29 May 2021',
    userImg: 'none',
    messageTime: '10:31 AM ',
    messageText:
      'Dem today is a lazy-lazy day. ',
  },
  {
    id: '3',
    userName: '29 May 2021',
    userImg: 'none',
    userImg: require('../assets/emojis/anxious.png'),
    messageTime: '11:30 AM',
    messageText:
      '',
  },
  {
    id: '4',
    userName: '29 May 2021',
    userImg: 'none',
    messageTime: '11:31 AM',
    messageText:
      'What made you smile today?    The rain! The weather was so beautiful today!',
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
  
  return (
    <ScrollView>
      <View style={styles.wrapper}>
      <View style={styles.motivationImgWrapper}>
          <ImageBackground
            style={styles.motivationImg}
            source={require('../assets/images/1413983.jpg')}
          />
          <View>
         </View>
          <ImageBackground />
        </View>
        <View style={styles.addButtonWrapper}>
        <TouchableOpacity onPress={()  => navigation.navigate('AddEntry')}>
          <View style={styles.addButton}>
              <Image
                source={require('../assets/images/AddEntry.png')}
                style={{height: 50, width: 50}}
              />
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AddMood')}>
          <View style={styles.addButton}>
          <Image
                source={require('../assets/images/mood.png')}
                style={{height: 50, width: 50}}
              />
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('AddPromptEntry')}>
          <View style={styles.addButton}>
          <Image
                source={require('../assets/images/Prompt.png')}
                style={{height: 60, width: 50}}
              />
          </View>
          </TouchableOpacity>
          
        </View>
        <View style={styles.container}>
        <View style={{ backgroundColor: 'pink', marginBottom: 10, padding: 10}}>
          <Text>30 May 2021</Text>
       </View>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
            renderItem={({ item }) => (    
              <TouchableOpacity style={styles.card} >
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
          <View style={{ backgroundColor: 'pink', marginBottom: 10, padding: 10}}>
          <Text>29 May 2021</Text>
       </View>
          <FlatList 
          data={Messages29}
          keyExtractor={item=>item.id}
            renderItem={({ item }) => (    
              <TouchableOpacity style={styles.card} >
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
    // resizeMode: 'cover'
  },
  addButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    
  },
  addButton: {
    height: 60,
    width: 100,
    // backgroundColor: 'purple',
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
    marginTop: 10,
    marginBottom: 20,
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

