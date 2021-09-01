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
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import { Button, Divider } from 'react-native-elements'
import { actions } from '../store'
import { connect } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.setState.item,
        }
    }

    keyExtractor = (item, index) => index.toString()

    componentDidMount = () => {
        this.props.getPosts()
    }

    renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() =>
            this.props.navigation.navigate('PostDetail', { item })} >
            <View style={{
                margin: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 8,
                padding: 5
            }}>
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
            </View>
        </TouchableWithoutFeedback>
    )

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                {
                    !this.props.posts ?
                        <ActivityIndicator />
                        :
                        <ImageBackground
                            source={image}
                            style={styles.image}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Button title='Crear Nuevo Post'
                                    onPress={() => this.props.navigation.navigate('PostCreate')} />
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={this.keyExtractor}
                                    data={this.props.posts.reverse()}
                                    renderItem={this.renderItem}
                                    style={styles.flatLIst}
                                />
                            </View>

                        </ImageBackground>
                }
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    titlecontainer: {
        padding: 10
    },
    bodycontainer: {
        padding: 10
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
    },
    flatLIst: {
        marginBottom: 110,
    }
})

const mapDispatchToProps = dispatch => ({
    getPosts: () =>
        dispatch(actions.posts.getPosts()),
})
const mapStateToProps = state => ({
    posts: state.posts.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)((Posts))