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
  Alert,
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
      id: '',
      name: '',
      address: '',
      img: '',
      urlMap: '',
      latitude: '',
      longitude: '',
    }
  }

  _send = () => {
    const { id, name, address, img, urlMap, latitude ,longitude } = this.state
    ///Validations
    this.props.createPost({ id, name, address, img, urlMap, latitude ,longitude }).then(() => {
      this.props.navigation.goBack()
    })
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ height: '100%', width: '100%'}}>
          <ImageBackground
            source={image}
            style={styles.image}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
              <View style={{ margin: width / 100 }}></View>
              <Button title='Create' onPress={() => this._send()}
                style={{ width: width * 0.8 }} />
              <View style={{ margin: width / 100 }}></View>
              <Input
                placeholder='Name'
                inputContainerStyle={{
                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.name}
                onChangeText={(value) => this.setState({ name: value })}
              />
              <Input
                placeholder='Address'
                inputContainerStyle={{
                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.address}
                onChangeText={(value) => this.setState({ address: value })}
                multiline

              />
              <Input
                placeholder='Photo'
                inputContainerStyle={{

                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.img}
                onChangeText={(value) => this.setState({ img: value })}
                multiline
              />
              <Input
                placeholder='Url Map Direction'
                inputContainerStyle={{
                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.urlMap}
                onChangeText={(value) => this.setState({ urlMap: value })}
                multiline
                numberOfLines={1}
              />
              <Input
                placeholder='Latitude'
                inputContainerStyle={{
                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.latitude}
                onChangeText={(value) => this.setState({ latitude: value })}
                multiline
                numberOfLines={1}
              />
              <Input
                placeholder='Longitude'
                inputContainerStyle={{
                  alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={this.state.longitude}
                onChangeText={(value) => this.setState({ longitude: value })}
                multiline
                numberOfLines={1}
              />
              <View style={{ margin: width / 11 }}></View>
            </View>
          </ImageBackground>
        </ScrollView>
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
    margin: width / 30,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  },
})

const mapDispatchToProps = dispatch => ({
  createPost: (data) =>
    dispatch(actions.posts.createPost(data)),
})
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))