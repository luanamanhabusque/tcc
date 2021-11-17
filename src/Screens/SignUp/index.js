import React from 'react';
import styled from 'style-components/native';
import  AsyncStorage  from 'react-native-community/async-storage';
import {UserContext} from '../../Contexts/userContext';

const InputArea = styled.View`
    width :100%;
    height:60px;
    background-color: #E395CD;
    flex-direction: row;
    border-radius:30px;
    padding-left:15px;
    align-items:center;
    margin-bottom:15px;
`;

const Input = styled.TextInput`
    flex:1;
    fonte-size:16px;
    margin-left:10px;
`;

export default ({IconPng, placeholder,value, onChangeText,password}) => {
    return(
        <InputArea>
            <IconPng width="24" height="24" fill="#268596"></IconPng>
            <Input
            placeholder = {placeholder}
            placeholderTextColor="#268596"
            value = {value}
            onChangeText = {onChangeText}
            secureTextEntry={password}
            >
             </Input>
        </InputArea>
    );
}