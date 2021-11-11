import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color : #ADFF9F;
    flex : 1;
    justify-content  center;
    align-items :center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding : 40px;
    `;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color:#E395CD;
    border-radius:30px;
    justify-content  center;
    align-items :center;
    `;
export const CustomButtonText =  styled.Text`
    fonte-size:18px;
    color:#FFF;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction:row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom:20px;
`;
export const SignMessageButtonText =  styled.Text`
        fonte-size:16px;
        color:#FFF;
`;
export const SignMessageButtonTextBold =  styled.Text`
    fonte-size:16px;
    color:#FFF;
    font-height: bold;
    margin-left: 5px;

`;