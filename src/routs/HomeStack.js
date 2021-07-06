import React, { Component } from 'react';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} 
                options={{
                    title: 'My home',
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