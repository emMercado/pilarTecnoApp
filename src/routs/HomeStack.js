import React, { Component } from 'react';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator style={{flex: 1}}>
            <HomeStack.Screen name="Home" component={Home} 
                style={{flex: 1, justifyContent: 'center'}}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: `#d2691e`,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
            }}/>            
        </HomeStack.Navigator>
    )
}