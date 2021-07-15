import React, { Component } from 'react';
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
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }

class Create extends React.Component {

  render() {
 
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={image}
          style={styles.image}
        >
          <Text style={styles.text}>Create your account</Text>
          <Input style={styles.input}
            placeholder='Your username or Email'
            leftIcon={<Icon
              name='user'
              size={30}
              color='#008080' />
            }
            onChangeText={em => this.setState({ email: em })}
          />
          <Input style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            leftIcon={<Icon
              name='user'
              size={30}
              color='#008080' />}
            onChangeText={psw => this.setState({ password: psw })}
          />
          <TouchableOpacity style={[styles.buttonSinUp, { backgroundColor: '#2f4f4f' }]}>
            <Text style={styles.textButton}>
              Registry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonSinUp, { backgroundColor: '#2f4f4f' }]}
            onPress={()=> this.props.navigation.navigate('Login')}
          >
            <Text style={styles.textButton}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>

    )
  }
}

export default Create;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    color: `#ff4500`,
    textAlign: 'center',
  },
  textButton: {
    margin: width / 20,
    fontSize: 25,
    color: `#ff4500`,
    textAlign: 'center',
  },
  input: {
    marginTop: 10,
    fontSize: 20,
    color: '#90ee90',
    textAlign: 'left',
    backgroundColor: '#f0ffff',
  },
  buttonSinUp: {
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 70,
    paddingBottom: 3,
    borderRadius: 2,
    justifyContent: 'center',
  },
  googleLog: {
    margin: width / 20,
  }
})