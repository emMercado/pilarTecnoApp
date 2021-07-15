import React, { Component } from 'react';
import Create from '../screens/Create';
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const CreateStacks = createStackNavigator();

export default CreateStack = (props) => {
    return(
        <CreateStacks.Navigator>
            <CreateStacks.Screen name="Login" component={Login} 
               options={{
                title: 'PilarTecnoApp',
                headerStyle: {
                    backgroundColor: `#d2691e`,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} 
            />
            <CreateStacks.Screen name="Create" component={Create} 
                options={{
                    title: 'Create New Account',
                    headerStyle: {
                        backgroundColor: `#d2691e`,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
            }}/>   

        </CreateStacks.Navigator>
    )
}