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
/* import { Button, Divider } from 'react-native-elements' */
import { actions } from '../store'
import { connect } from 'react-redux'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }


class PostDetail extends React.Component {

  constructor(props) {
    super(props);

  }

  _delPost = () => {
    const { item } = this.props.route.params;
    const { id } = item;

    this.props.delPost({ id }).then(() => {
      this.props.navigation.goBack()
    })
  }


  render() {
    const { item } = this.props.route.params;
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={image}
          style={styles.image}
        >
          <View style={{ flexDirection: 'column', height, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View >
                <Text >
                  {item.title}
                </Text>
              </View>
              <View >
                <Text >
                  {item.body}
                </Text>
                <TouchableOpacity
                  onPress={() => this._delPost()}
                  style={[styles.button, { backgroundColor: `#daa520` }]}>
                  <Text style={styles.text}>
                    eliminar
                  </Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  titlecontainer: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  bodycontainer: {

    borderRadius: 15,
    justifyContent: 'center',
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
  delPost: (data) =>
    dispatch(actions.posts.delPost(data)),
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostDetail))