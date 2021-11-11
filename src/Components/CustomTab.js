import React,  {useContext} from 'react';
import styled from 'styled-components/native';

import {userContext} from  '../Context/userContext';

import HomeIcon from '../Assets/home.svg';
import ProfileIcon from '../Assets/person.svg';


const TabArea = styled.View`
    heigth:60px;
    background-color: #ADFF9F;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70 px;
    height: 70px;
    justify-content:center;
    align-items:center;
    background-color:#FFFFF;
    border-radius:35px;
    border: 3px solid #ADFF9F;
    margin-top: -20px;

`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius:12px;
`;

export default ({state, navigation}) => {
    const{state:user} = useContext(userContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0?1:0.5}} width="24" height="24" fil="#FFFFFF"  ></HomeIcon>
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Appointments')}>
                <AppointmentsIcon width="32" height="32" fil="#ADFF9F"  ></AppointmentsIcon>
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source = {{uri:user.avatar}} / > 
                    :
                    <ProfileIcon style={{opacity: state.index===0?3:0.5}} width="24" height="24" fil="#FFFFFF"  ></ProfileIcon>
                } 
            </TabItem>
        </TabArea>
    );
}