import React, {useState} from 'react';
import {Text} from 'react-native';
import {UserContext} from '../../Contexts/userContext';
import  AsyncStorage  from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold
} from './styles';
import SignInput from '../../Components/SignInput';
import bbLogo from '../../Assets/logo.png';
import EmailIcon from '../../Assets/email.png';
import LockIcon from '../../Assets/lock.png';
import PersonIcon from '../../Assets/person.png';
import { useContext } from 'react';
import { userReducer } from '../../Reduces/userReducer';

export default() => {
    const {dispatch: userDispatch} = useContext(userContext);
    const navigation =  useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [personField, setPersonField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }
    const handleSignClick = async () => {
        if (emailField != '' && passwordField != ''){
            //let.json = await Api.SignIn(emailField, passwordField);
            //if(json.token){} else alert email senha incorreto
           // userReducer.dispatch
            //    type: 'setAvatar',
                //payload:{
                  avatar: JSON.data.avatar
                //}
           // });
        }
        else {
            alert("Preencha os campos, por favor");
        }
 
    }

    return (
    <Container>
        <bbLogo width="100%" heignt = "160"></bbLogo>

            <InputArea>
            <SignInput 
                IconPng={PersonIcon}
                placeholder="Digite seu nome"
                value = {setPersonField}
                onChangeText={t=>setPersonField(t)}
                >     
                </SignInput>
                <SignInput 
                IconPng={EmailIcon}
                placeholder="Digite seu email"
                value = {setEmailField}
                onChangeText={t=>setEmailField(t)}
                >     
                </SignInput>
                <SignInput 
                LockIcon={LockIcon}
                placeholder="Digite sua senha"
                value = {setPasswordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                >    
                </SignInput>
                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
    </Container>
    );
}