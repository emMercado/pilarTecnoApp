import React, { Component } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux'
import { Avatar, Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import { actions } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window')

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            photoURL: '',
            name: ''
        }
    }
    componentDidMount = () => {
        const { user } = this.props
        console.log('user profile: ' + JSON.stringify(user))
        this.setState({
            email: user.providerData[0].email,
            photoURL: user.providerData[0].photoURL,
            name: user.providerData[0].displayName
        })
    }

    render() {
        const { email, photoURL, name } = this.state
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.content}>
                    <View style={{ alignItems: 'center' }}>
                        {photoURL ?
                            <Avatar
                                rounded
                                source={{ uri: photoURL }}
                                size='xlarge'
                            />
                            :
                            <Avatar
                                rounded
                                source={require('../assets/images/avatar.png')}
                                size='xlarge'
                            />
                        }
                        <View style={styles.dataContainer}>
                            <Text style={styles.infoText}>{email}</Text>
                            {
                                name ?
                                    <Text style={styles.infoText}>{name}</Text>
                                    :
                                    <Text style={styles.infoText}>Username</Text>
                            }
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, top: 50, width: width * 0.5 }}>

                    <Button title='Salir' onPress={() => {
                        auth()
                            .signOut()
                            .then(async () => {
                                console.log('User signed out!'),
                                    this.props.setUser({ user: null })
                                try {
                                    await AsyncStorage.removeItem('isLog')
                                } catch (e) {
                                    console.log('ubo un error :' + e)
                                }
                            }).catch(err => console.log(err));
                    }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        // color:'#fff',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        top: 50,
        justifyContent: 'center',
        // alignItems:'center'
    },
    dataContainer: {
        top: 50,
        width
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'grey'
    }
})

const mapDispatchToProps = dispatch => ({
    setUser: ({ user }) =>
        dispatch(actions.user.setUser({ user })),
})

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)((Profile))