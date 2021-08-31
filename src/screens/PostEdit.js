import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import { Input, Button, Divider } from 'react-native-elements'
import { actions } from '../store';
import { connect } from 'react-redux';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }


class PostEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      address: '',
      img: '',
      urlMap: '',
    }
  }

  componentDidMount = () => {
    const { item } = this.props.route.params;
    item ?
      this.setState({
        id: item.id,
        name: item.name,
        address: item.address,
        img: item.img,
        urlMap: item.urlMap
      })
      : null
  }

  _updatePost = () => {
    const { item } = this.props.route.params;
    const { _id } = item
    const {name, address, img, urlMap } = this.state

    this.props.updatePosts({ _id, name, address, img, urlMap }).then(() => {
      this.props.navigation.navigate('Posts')
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
        <ImageBackground
          source={image}
          style={styles.image}
        >
          <View style={{ flex: 1 }}>
            <Input
              placeholder='Place of vaccination name'
              inputContainerStyle={{
                alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
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
                pading: 15
              }}
              inputStyle={{ color: 'white', marginLeft: 15 }}
              placeholderTextColor='#ccc'
              multiline
              numberOfLines={2}
              value={this.state.address}
              onChangeText={(value) => this.setState({ address: value })}
            />
            <Input
              placeholder='Image'
              inputContainerStyle={{
                alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                pading: 15
              }}
              inputStyle={{ color: 'white', marginLeft: 15 }}
              placeholderTextColor='#ccc'
              multiline
              numberOfLines={2}
              value={this.state.img}
              onChangeText={(value) => this.setState({ img: value })}
            />
            <Input
              placeholder='Url Map Direction'
              inputContainerStyle={{
                alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                pading: 15
              }}
              inputStyle={{ color: 'white', marginLeft: 15 }}
              placeholderTextColor='#ccc'
              multiline
              numberOfLines={2}
              value={this.state.urlMap}
              onChangeText={(value) => this.setState({ urlMap: value })}
            />
            <Button
              title='Save Change' onPress={() => this._updatePost()}
              style={{ width: width * 0.8 }} />
          </View>
        </ImageBackground>
      </SafeAreaView >
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
  }
})

const mapDispatchToProps = dispatch => ({
  updatePosts: (data) =>
    dispatch(actions.posts.updatePosts(data)),
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))