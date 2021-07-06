import React, { Component } from 'react';
import Map from '../screens/Map';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
    return(
        <MapStack.Navigator>
            <MapStack.Screen name="Map" component={Map} 
            options={{
                title: 'Map',
                headerStyle: {
                    backgroundColor: `#d2691e`,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                
        }}
            />            
        </MapStack.Navigator>
    )
}