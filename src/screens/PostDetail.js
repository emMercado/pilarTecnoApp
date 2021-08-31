import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,

} from 'react-native';
import { Link } from '@react-navigation/native';
import { actions } from '../store';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }


class PostDetail extends React.Component {

  constructor(props) {
    super(props);
    const { item } = this.props.route.params;
    this.state = {
      id: item.id,
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View
      style={{
        margin: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 3,
        padding: 5,
      }}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Divider />
      </View>
      <View style={styles.bodycontainer}>
        <Text style={styles.text2}>
          {item.address}
        </Text>
        <Divider />
      </View>
    </View>
  );

  _delPost = () => {
    const { item } = this.props.route.params;
    const { _id } = item;
    this.props.delPost({ _id }).then(() => {
      this.props.navigation.goBack()
    })
  }

  render() {

    const { item } = this.props.route.params;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
        <ImageBackground
          source={image}
          style={styles.image}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PostEdit', { item })}
              style={[styles.button, { backgroundColor: `#daa520` }]}>
              <Text style={styles.text}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._delPost()}
              style={[styles.button, { backgroundColor: `#daa520` }]}>
              <Text style={styles.text}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} >
            <View style={styles.titlecontainer}>
              <Text style={styles.title}>
                {item.name}
              </Text>
            </View>
            <Divider />
            <View style={styles.bodycontainer}>
              <Text style={styles.text}>
                {item.address}
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={{ uri: item.img }} />
              <Text style={styles.text}>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    margin: width / 5,
    height: width / 2.5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    shadowColor: '#fff'
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    shadowColor: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#daa520',
    textAlign: 'center'
  },
  titlecontainer: {
    margin: width / 50,
    height: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  bodycontainer: {
    borderRadius: 15,
    justifyContent: 'center',
  },
  button: {
    margin: width / 20,
    height: width / 10,
    width: width / 2.5,
    borderRadius: 3,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  },
  button2: {
    margin: width / 30,
    justifyContent: 'center',
    height: width / 10,
    width: width / 2.5,
    borderRadius: 2,
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