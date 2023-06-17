/* eslint-disable prettier/prettier */
 import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { View } from 'react-native';
import PackageApp from '@mohammedasifp/getactyv'
const theme ={
  backgroundColor: 'white',
  fontColor1: 'red',
  fontColor2: 'yellow',
  headerColor: 'red',
  headerColor1: 'pink'
  }
const App = () => {
  return(
    <AppNavigator/>
  ) 
};
export default App;
// name = squat
// videoUrl =  https://s3.ap-south-1.amazonaws.com/videos.aitrainer.in/male/squat.mp4
// imageurl = https://images.aitrainer.in/exercises/squats.jp

// name = Ankle Hold L
// imageulr = https://images.aitrainer.in/exercises/Lpose.jpg
// videourl = https://s3.ap-south-1.amazonaws.com/videos.aitrainer.in/male/anklehold_l.mp4

// name = High Knee
//imageurl = https://images.aitrainer.in/exercises/highknee.jpg
// videourl = https://s3.ap-south-1.amazonaws.com/videos.aitrainer.in/male/high_knee.mp4

// imageurl = https://images.aitrainer.in/exercises/armstretch.jpg
// videourl = https://s3.ap-south-1.amazonaws.com/videos.aitrainer.in/male/armstretch.mp4
// name = Arm Stretch
