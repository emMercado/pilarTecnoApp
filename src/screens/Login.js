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
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { actions } from '../store';

GoogleSignin.configure({
  webClientId: "79232659516-fmr9un4huvq9ilpnfc8k04dfjmu5ti98.apps.googleusercontent.com",
});

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      photoURL: '',
      name: '',
      password: '',
    };
  }

  _onMapPress = () => {
    Alert.alert(
      "Hi!",
      "You are already there",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  }

  render() {
    const {email, photoURL, name, loading, password} = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
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
          <GoogleSigninButton
            style={[styles.googleLog]}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => this.onGoogleButtonPress().
              then(async (data) => {
                console.log('Signed in with Google!')
                if (data) {
                  console.log('res login: ' + JSON.stringify(data.user))
                  try {
                    await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
                  } catch (e) {
                    console.log('ubo un error :' + e)
                  }
                  this.props.setUser(data.user)
                }
              }).catch(err => { console.log(err) })
            }
          />
          <TouchableOpacity style={[styles.buttonSinIn, { backgroundColor: '#2f4f4f' }]}
            onPress={() => {
              auth().signInWithEmailAndPassword(email, password)
                .then(async data => {
                  console.log('Signed in with e-mail!');
                  if (data) {
                    console.log('res login: ' + JSON.stringify(data.user));
                    try {
                      await AsyncStorage.setItem(
                        'isloged',
                        JSON.stringify(data.user),
                      );
                    } catch (e) {
                      console.log('Hubo un error :' + e);
                    }
                    this.props.setUser(data.user);
                  }
                }).catch(err => { console.log(err) })
            }}>
            <Text style={styles.textButton}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonSinUp, { backgroundColor: '#2f4f4f' }]}>
            <Text style={styles.textButton}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (data) =>
    dispatch(actions.user.setUser(data)),
})
const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)((Login))

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
  buttonSinIn: {
    marginTop: 180,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 70,
    paddingBottom: 3,
    borderRadius: 2,
    justifyContent: 'center',
  },
  buttonSinUp: {
    marginTop: -40,
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