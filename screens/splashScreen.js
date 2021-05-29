import React from 'react'
import { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'

export default class Splash extends Component{
  constructor(props) {
    // const navigation = useNavigation()
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Tab Navigator')
    }, 5)
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/1413983.jpg')}
        style={{ height: '100%', width: '100%' }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white'}}>
            Unwind
          </Text>
        </View>
      </ImageBackground>
    )
  }
}