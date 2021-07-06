import AppStack from '../routs/app';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

 const App = () => {

    return( 
      <NavigationContainer>
        <AppStack/>   
      </NavigationContainer>
    )
}

export default App;