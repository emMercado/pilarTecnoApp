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
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }


class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }


  _send = () => {
    const { title, body } = this.state
    ///VALIDACIONES
    this.props.createPost({ title, body }).then(() => {
      this.props.navigation.goBack()
    })
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={image}
          style={styles.image}
        >
          <Input
            placeholder='Titulo'
            inputContainerStyle={{
              width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.title}
            onChangeText={(value) => this.setState({ title: value })}
          />
          <Input
            placeholder='Descripcion'
            inputContainerStyle={{
              width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
              pading: 15
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.body}
            onChangeText={(value) => this.setState({ body: value })}
            multiline
            numberOfLines={2}
          />

          <Button title='Postear' onPress={() => this._send()}
            style={{ width: width * 0.8 }} />
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  },
 /*  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  } */
})

const mapDispatchToProps = dispatch => ({
  createPost: (data) =>
    dispatch(actions.posts.createPost(data)),
})
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))