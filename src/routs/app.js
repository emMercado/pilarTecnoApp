import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import CreateStack from './CreateStack';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();

export default AppStack = (props) => {
    const user = useSelector(state => state.user.user)
    return (
        <Stack.Navigator headerMode="none">
            {

                user ? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    
                    <Stack.Screen name="CreateStack" component={CreateStack} /> 
                )
            }
        </Stack.Navigator>
    )
}

