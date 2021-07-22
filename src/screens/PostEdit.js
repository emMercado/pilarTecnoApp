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
      title: '',
      body: '',
    }
  }

  componentDidMount = () => {
    const { item } = this.props.route.params;
    item ?
      this.setState({
        title: item.title,
        body: item.body,
      })
      : null
  }

  _updatePost = () => {
    const { item } = this.props.route.params;
    const { id } = item
    const { title, body } = this.state

    this.props.updatePosts({ id, title, body }).then(() => {
      this.props.navigation.popToTop()/* navigate('Posts') */
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
              multiline
              numberOfLines={2}
              value={this.state.body}
              onChangeText={(value) => this.setState({ body: value })}
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