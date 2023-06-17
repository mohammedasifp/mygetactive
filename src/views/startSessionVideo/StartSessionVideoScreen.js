import React from 'react';
import { View, Text, Image, Button, Modal, TouchableOpacity, ScrollView } from "react-native";
import VideoPlayer from 'react-native-video-player'
import Video from 'react-native-video';


const StartSessionVideoScreen = (props) => {
  const { navigation } = props

  const navigateToStartWorkout = async () => {
    navigation.navigate('Practice')
  }

  return (
   <View style={{flex: 1, backgroundColor: '#25272D'}}>
        <View style={{ flex: 1,alignSelf:'center',justifyContent:'flex-start', width:360,height:400, marginTop: '55%'}} >
       <Text
                  style={{
                    alignContent: 'center',
                    justifyContent:'center',
                    alignSelf:'center',
                    color: '#fff',
                    fontSize:15,
                    fontWeight:'bold',
                    // paddingRight:30,
                    padding: 10,
                  }}
                >set up and start less than one minute</Text>
             <Video
              source={{ uri: 'https://ik.imagekit.io/getactyv/videos/GIFS-1-plotted.mp4'}
                }
                autoplay={true}
                defaultMuted={false}
                videoWidth={1200}
                VideoHeight= {900}
                  thumbnail={{ uri: 'https://ik.imagekit.io/getactyv/videos/GIFS-1-plotted.mp4' }}
                // duration={true}
                />
            <View style={{marginTop:10, width: '50%',height:62, alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
              <TouchableOpacity title='Understood, continue'
                style={{
                  padding:10,
                  color: '#000',
                  backgroundColor:'#C3F73A',
                  alignItems:'center',
                  borderRadius:8
                }}
                onPress={()=>{navigateToStartWorkout ()}}
                >
                  <Text style={{fontSize:18,fontWeight:'bold',}}>
                    Understood, continue
                  </Text>
                </TouchableOpacity>
              </View>
     </View>
   </View>
  )
}
export default StartSessionVideoScreen;