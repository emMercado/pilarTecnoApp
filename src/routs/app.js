import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Login from '../screens/Login';




const Stack = createStackNavigator();

export default AppStack = (props) => {
    isLoged = true
    return(
        <Stack.Navigator headerMode="none">
            {
                isLoged? (
                    <Stack.Screen name="AppStack" component={Tabs}/>
                ) : (
                    
                    <Stack.Screen name="Login" component={Login} />
                )
            }
        </Stack.Navigator>
    )
}

