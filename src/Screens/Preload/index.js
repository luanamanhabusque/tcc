import React, {useEffect, useContext} from 'react'; 
import {Container, LoadingIcon} from './styles';
import {Text, View, StyleSheet} from 'react-native';
import {UseNavigation} from 'react-navigation/native';
import  AsyncStorage  from 'react-native-community/async-storage';


import bbLogo from '../../Assets/icon.png';

bbLogo = LoadingIcon(bbLogo);

export default() => {
    const navigation = UseNavigation();
    useEffect(()=>{
        const checkToken =async()=>{

           // const token = await AsyncStorage.getItem('token');
            //if(token !== null){
                //chamar api pra validar token
          //  }
            //else {
                //navegar para o login se ele não tiver token
                navigation.navigate('SignIn');
           // }

            
        }
         checkToken();

    },[]);
    
    return (
    <Container>
      <bbLogo width = "100%" height = "160"></bbLogo>

    </Container>
    );
}