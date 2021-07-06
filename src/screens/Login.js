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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri:'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg'}

export default class Login extends React.Component {

  _onMapPress = () => {
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
          <Text style={styles.text}> Log In </Text>
          <Input style={styles.input}
          placeholder='Your username or Email'
          leftIcon={<Icon 
              name='user'
              size={30}
              color='#008080'/>}
          />
          <Input style={styles.input} 
          placeholder="Enter your password" 
          secureTextEntry={true} 
          leftIcon={<Icon 
              name='lock'
              size={30}
              color='#008080'/>}
              />
          <TouchableOpacity style={[styles.buttonSinIn, { backgroundColor:'#2f4f4f' }]}>
            <Text style={styles.textButton}>
              Sign In
            </Text>
          </TouchableOpacity>    
          <TouchableOpacity style={[styles.buttonSinUp, { backgroundColor:'#2f4f4f' }]}>
            <Text style={styles.textButton}>
              Sign Up
            </Text>
          </TouchableOpacity>    
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
      marginTop:100,
      fontSize:25, 
      fontWeight:'bold', 
      color:`#ff4500`,
      textAlign:'center',
    },
    textButton: {
      margin: width/20,
      fontSize:25, 
      color:`#ff4500`,
      textAlign:'center',
    },
    input: {
        marginTop: 10,
        fontSize:20, 
        color:'#90ee90',
        textAlign:'left',
        backgroundColor:'#f0ffff',
    },
    buttonSinIn: {
      marginTop:180,
      marginLeft: 60,
      marginRight: 60,
      marginBottom: 70,
      paddingBottom:3,
      borderRadius:2,
      justifyContent:'center',
    },
    buttonSinUp: {
      marginTop:-40,
      marginLeft: 60,
      marginRight: 60,
      marginBottom: 70,
      paddingBottom:3,
      borderRadius:2,
      justifyContent:'center',
    },
  })