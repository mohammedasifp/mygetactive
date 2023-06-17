import React, { useEffect } from 'react';
import StartSessionVideoScreen from '../../views/startSessionVideo/StartSessionVideoScreen';
import Orientation from 'react-native-orientation';

const StartSessionVideo = (props) =>{
        const { navigation } = props
    useEffect(()=>{

            Orientation.lockToPortrait();

     },[])
    return(
        <StartSessionVideoScreen navigation={navigation} />
    )
}

export default StartSessionVideo