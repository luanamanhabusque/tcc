import React from 'react';
import {Container, HeaderTitle} from './styles';
import {Text} from 'react-native';
import {useNavigation} from 'react-navigation/native';



export default() => {

    const  navigation = useNavigation();
    return(
        <Container>
            <HeaderTitle>"Escolha uma das opções abaixo"</HeaderTitle>
            <Text>Home</Text>
        </Container>
    );
  
}