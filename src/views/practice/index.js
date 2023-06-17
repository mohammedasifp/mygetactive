import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, NativeModules, Dimensions, Image, TouchableOpacity, Text } from 'react-native';
import {
  Camera, useCameraDevices,
  useFrameProcessor
} from 'react-native-vision-camera';
import 'react-native-reanimated'
import Video from 'react-native-video';
import Bar from '../../components/Progressbar/progressbar';
import Timer from '../../components/Timer/timer';

const PracticePage = ({navigation, item}) => {
  console.log(item)
const [pauseVideo, setPauseVideo] = useState(false)
const [muteVideo, setMuteVideo] = useState(false)
const [controlicons, setControlicons] = useState(false)
const [rotate, setRotate] = useState(true)
const devices = useCameraDevices()
let  device = devices.back;
const camera = useRef();

useEffect(()=>{
  showcontrolicons()
},[pauseVideo, muteVideo, rotate])

const showcontrolicons = () =>{
   setControlicons(true)
   setTimeout(()=>{
    setControlicons(false)
   }, 5000)
}
const frameProcessor = useFrameProcessor((frame) => {
     console.log("frame processor ", frame);
    // console.log("most below line");
  }, [])

if (device == null) return <ActivityIndicator />
const videopauseAndplay = () =>{
     setPauseVideo(!pauseVideo)
}
 const soundmuteAndunmute = () =>{
  setMuteVideo(!muteVideo)
}
return (
   <View style={{ flex: 1, }}>
    <Timer
    time = {30}
    />
    <Bar/>
      <View style={{ height: '50%'}}>
      <View style={styles.gobackview} >
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{ width: 25, height: 25, borderRadius: 12.5, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }} >
          <Image style={{ width: 15, height: 10 }} source={require('../../assets/left-arrow.png')}/>
        </TouchableOpacity>
      <Text style={{ marginLeft: 10, fontWeight: '500', color: 'white' }} >{item.name} </Text>
    </View>
      { rotate ?  <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={devices.back}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={8}
          videoStabilizationMode='auto'
        /> :
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={devices.front}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={8}
          videoStabilizationMode='auto'
      /> }
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={()=>{showcontrolicons()}}  style={{ backgroundColor: '#fff', height: '50%', backgroundColor: 'black', padding: 0, resizeMode: 'contain' }}>
        <Video 
         source={{ uri: item.videoUrl }}
          autoplay={true}
          // defaultMuted={false}
          repeat={true}
          // videoWidth={100}
          // VideoHeight={100}
            paused={pauseVideo}
           muted={muteVideo}
          resizeMode='cover'
          left={29}
          style={{
            width:360,
            height:'100%',
        }} 
          thumbnail={{ uri: 'https://ik.imagekit.io/getactyv/videos/GIFS-1-plotted.mp4' }}
        />
      </TouchableOpacity>
     { controlicons && <View style = {styles.iconsContainer} >
          <TouchableOpacity>
            <Image style={styles.setting}  source={require('../../assets/setting.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setRotate(!rotate)}} >
           <Image style={styles.switchCamera}  source={require('../../assets/switch-camera.png')}/>
          </TouchableOpacity>
        { !pauseVideo ? <TouchableOpacity onPress={()=>{videopauseAndplay()}} >
           <Image style={styles.playPauseIcon}  source={require('../../assets/pause-icon.png')}/>
          </TouchableOpacity> :
          <TouchableOpacity  onPress={()=>{videopauseAndplay()}} >
             <Image style={styles.playPauseIcon1}  source={require('../../assets/play-video.jpg')}/>
         </TouchableOpacity> } 
          <TouchableOpacity>
           <Image style={styles.switchCamera}  source={require('../../assets/next-icon.jpg')}/>
          </TouchableOpacity>
          { !muteVideo ? 
            <TouchableOpacity onPress={()=>{soundmuteAndunmute()}} >
              <Image style={styles.setting}  source={require('../../assets/sound-on-icon.png')}/>
            </TouchableOpacity>:
            <TouchableOpacity onPress={()=>{soundmuteAndunmute()}} >
              <Image style={styles.setting}  source={require('../../assets/no-audio-icon.jpg')}/>
            </TouchableOpacity> }
       </View> }
    </View>
  )
 }

export default PracticePage;

const styles = StyleSheet.create({
   iconsContainer:{
     height: 40,
     width: '100%',
    //  backgroundColor: 'red',
     position: 'absolute',
     zIndex: 100,
     bottom: 10,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center'
   },
   controlicons: {
    width: 25,
    height: 25,
    marginRight: 15
   },
   playPauseIcon:{
    width: 30,
    height: 30,
    marginRight: 15,
    borderRadius: 30

   },
   playPauseIcon1:{
    width: 27,
    height: 27,
    marginRight: 15,
   },
   switchCamera:{
    width: 25,
    height: 25,
    marginRight: 15,
    resizeMode: 'cover'
   },
   setting:{
    width: 15,
    height: 15,
    marginRight: 15
   }, 
   gobackview:{
    width: 120,
    height: 30,
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    flexDirection: 'row', 
    alignItems: 'center'
   }
})


