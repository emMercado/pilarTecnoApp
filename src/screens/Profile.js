import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri:'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg'}

export default class Profile extends React.Component {

  _onHomePress = () => {
    Alert.alert(
        "Hi!",
        "You are already there",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render(){
    return( 
    <SafeAreaView style={{flex:1}}>
        <ImageBackground
            source={image} 
            style={styles.image}
        >
        <View style={{flexDirection:'column', height, justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>   
           
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize:30, 
        fontWeight:'bold', 
        color:'#fff',
        textAlign:'center'
    },
    button: {
        margin: width/20,
        height:width/2.5,
        width:width/2.5,
        borderRadius:15,
        justifyContent:'center',
        backgroundColor:'#fff',
        zIndex:1
    }
})