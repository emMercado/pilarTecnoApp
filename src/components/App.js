import AppStack from '../routs/app';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* import {
  Dimensions,
} from 'react-native'; */

import {Provider} from 'react-redux';

import {store} from '../store'; 

import auth from '@react-native-firebase/auth';
import { useDispatch, } from 'react-redux';
import { actions } from '../store';


import {useState,useEffect,navigationRef} from 'react';

/* const height = Dimensions.get('window').height
const width = Dimensions.get('window').width */

const App = (props) => {

  let AppWrapped = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const dispatch = useDispatch()
    // Handle user state changes
    async function onAuthStateChanged(user) {
      if(user){
      setUser(user)
      }else{
      dispatch(actions.user.setUser(null))
      }
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
  
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    
    }, []);
    if (initializing){ return null;}
    return(
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
  }

  return(
    <Provider store={store}>
      <AppWrapped />
    </Provider>
  )


}
export default App;