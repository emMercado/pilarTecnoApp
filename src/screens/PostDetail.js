import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Linking
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
      name: item.name,
      address: item.address,
      urlMap: item.urlMap,
      latitude: item.latitude,
      longitude: item.longitude,
    };
    this.linkToMap = this.linkToMap.bind(this)
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

  linkToMap = (latitude, longitude, name) => {
    const scheme = Platform.select({
      ios: 'maps:',
      android: 'geo:',
    });
    const position = `${latitude}, ${longitude}`;
    const label = name;
    const urlMaps = `${scheme}${position}?q=${label}`;
    Linking.openURL(urlMaps);
  }

  render() {

    const { item } = this.props.route.params;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <ScrollView style={{ height: '100%', width: '100%' }}>
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
              <TouchableOpacity
                onPress={() => this.linkToMap(item.latitude, item.longitude, item.name)}
                style={[styles.button, { backgroundColor: `#daa520` }]}>
                <Text style={styles.text}>Map</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} >
              <View style={styles.titlecontainer}>
                <Text style={styles.title}>
                  {item.name}
                </Text>
              </View>

                <View style={{ margin: width / 8 }}></View>
              <View style={styles.titlecontainer}>
                <Text style={styles.text}>
                  {item.address}
                </Text>
                {/* <Text style={styles.text}>
                  {item.urlMap}
                </Text> */}
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: item.img }} />
              </View>
              <View style={styles.titlecontainer}>
               {/*  <Text style={styles.text}>
                  {item.latitude}
                </Text>
                <Text style={styles.text}>
                  {item.longitude}
                </Text> */}
                <View style={{ margin: width / 8 }}></View>
              </View>
              <View style={styles.titlecontainer}>
              </View>
            </View>
            <View style={{ margin: width / 11 }}></View>
          </ImageBackground>
        </ScrollView>
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
    margin: width / 80,
    height: width / 10,
    width: width / 3.3,
    borderRadius: 1,
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