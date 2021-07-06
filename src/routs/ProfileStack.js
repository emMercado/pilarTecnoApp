import React, { Component } from 'react';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} 
            options={{
                title: 'ProfileStack',
                headerStyle: {
                    backgroundColor: `#d2691e`,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                
        }}/>            
        </ProfileStack.Navigator>
    )
}