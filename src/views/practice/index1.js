import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {
  Camera, useCameraDevices,
  useFrameProcessor
} from 'react-native-vision-camera';
import VideoPlayer from 'react-native-video-player'
import 'react-native-reanimated'
import { runOnJS } from 'react-native-reanimated';
import { FrameConversion } from './FrameProcessorPlugin';
import Svg, { Line, Path, Rect } from "react-native-svg";
import Video from 'react-native-video';
import Bar from '../../components/Progressbar/progressbar1';
import Timer from '../../components/Timer/timer';
// const { width, height } = Dimensions.get('window');

// const calculatedHeight = height * 0.7;

const strokeWidth = '3.5';
const strokeColor = '#03AC13'

const PracticePage1 = ({navigation, item}) => {
  const devices = useCameraDevices()
  const device = devices.back;
  const camera = useRef();
  const [dots, setDots] = useState([]);
  const [cordinatesData, setCordinatesData] = useState([]);
  const [pauseVideo, setPauseVideo] = useState(false)
  const [muteVideo, setMuteVideo] = useState(false)
  const [controlicons, setControlicons] = useState(false)
  const [rotate, setRotate] = useState(true)

  const frameProcessor = useFrameProcessor((frame) => {

     console.log("frame processor ", frame);
  
    // console.log("most below line");
  }, [])
  useEffect(()=>{
    showcontrolicons()
  },[pauseVideo, muteVideo, rotate])
  
  const showcontrolicons = () =>{
     setControlicons(true)
     setTimeout(()=>{
      setControlicons(false)
     }, 5000)
  }

  const cameraPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()
  }
  if (device == null) return <ActivityIndicator />
  const videopauseAndplay = () =>{
    setPauseVideo(!pauseVideo)
}
const soundmuteAndunmute = () =>{
 setMuteVideo(!muteVideo)
}
  return (
  <View  style={{ flex: 1, width: '100%', height: '100%' }}>
    <Timer/>
    <Bar/>
    <View style={styles.gobackview} >
        <TouchableOpacity onPress={()=>{navigation.goBack()}}  style={{ width: 25, height: 25, borderRadius: 12.5, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }} >
          <Image style={{ width: 15, height: 10 }} source={require('../../assets/left-arrow.png')}/>
        </TouchableOpacity >
      <Text style={{ marginLeft: 10, fontWeight: '500', color: 'white' }} >{item.name} </Text>
    </View>
   <View style={{ flexDirection: 'row-reverse' }}>
   <View style={{ height: '100%', width: '50%'}}> 
   {/* <Camera
    ref={camera}
    style={StyleSheet.absoluteFill}
    device={device}
    isActive={true}
    frameProcessor={frameProcessor}
    frameProcessorFps={8}
    videoStabilizationMode='auto'
  /> */}
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
  <TouchableOpacity   activeOpacity={0.9} onPress={()=>{showcontrolicons()}} style={{width: '50%', height: '100%'}}>
 {controlicons && <View style = {styles.iconsContainer1} >
    <TouchableOpacity onPress={()=>{setRotate(!rotate)}} >
      <Image style={[styles.switchCamera,{backgroundColor: 'white', borderRadius: 12}]}  source={require('../../assets/switch-camera.png')}/>
    </TouchableOpacity>
      { !pauseVideo ? 
      <TouchableOpacity onPress={()=>{videopauseAndplay()}} >
        <Image style={[styles.playPauseIcon, {backgroundColor: 'white'}]}  source={require('../../assets/pause-icon.png')}/>
      </TouchableOpacity> :
      <TouchableOpacity  onPress={()=>{videopauseAndplay()}} >
        <Image style={[styles.playPauseIcon1, { backgroundColor: 'white',  borderRadius: 8 }]}  source={require('../../assets/play-video.jpg')}/>
      </TouchableOpacity> } 
      <TouchableOpacity>
        <Image style={[styles.switchCamera, { backgroundColor: 'white', borderRadius: 14 }]}  source={require('../../assets/next-icon.jpg')}/>
      </TouchableOpacity>
       </View>}
      { controlicons &&  <View style = {styles.iconsContainer} >
        <TouchableOpacity>
          <Image style={[styles.setting, {marginLeft: 10}]}  source={require('../../assets/setting.png')}/>
        </TouchableOpacity>
          { !muteVideo ? 
         <TouchableOpacity onPress={()=>{soundmuteAndunmute()}} >
           <Image style={styles.setting}  source={require('../../assets/sound-on-icon.png')}/>
          </TouchableOpacity>:
          <TouchableOpacity onPress={()=>{soundmuteAndunmute()}} >
            <Image style={styles.setting}  source={require('../../assets/no-audio-icon.jpg')}/>
          </TouchableOpacity> }
       </View>}
      <Video
        // source={{ uri: 'https://s3.ap-south-1.amazonaws.com/videos.aitrainer.in/male/anklehold_l.mp4' }}
        // autoplay={true}
        // repeat={true}
        // defaultMuted={false}
        // paused={pauseVideo}
        // muted={muteVideo}
        // // videoHeight={90}
        // // videoWidth={100}
        // // resizeMode='stretch'
        source={{ uri: item.videoUrl }}
          autoplay={true}
          // defaultMuted={false}
          repeat={true}
            paused={pauseVideo}
           muted={muteVideo}
          resizeMode='cover'
          style={{
            width:'100%',
            height:'100%',
        }}
        thumbnail={{ uri: 'https://ik.imagekit.io/getactyv/videos/GIFS-1-plotted.mp4' }}
          />
     </TouchableOpacity>
    </View>
   </View>


  )
 }

export default PracticePage1;

const styles = StyleSheet.create({
  iconsContainer:{
    height: 40,
    width: '100%',
   //  backgroundColor: 'red',
    position: 'absolute',
    zIndex: 100,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsContainer1:{
    height: 40,
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    top: 150,
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
   width: 20,
   height: 20,
   marginRight: 15
  },
  gobackview:{
    width: 120,
    height: 30,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    flexDirection: 'row', 
    alignItems: 'center'
   }
})