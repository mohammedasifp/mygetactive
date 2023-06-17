
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const Bar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.1;
        return newProgress > 1 ? 1 : newProgress;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={{ zIndex: 100}} >
         <View style={styles.ripplecount} >
           <Text style={{fontSize:17, fontWeight: 'bold'}} >{(progress*10).toFixed(0)}</Text>
         </View>
        <View style={styles.container1}> 
      {/* */}
      <Progress.Bar
        progress={progress}
        color="#9EDB00"
        width={300}
        height={3}
        borderRadius={10}
        unfilledColor={'#ffff'}
      />
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'black',
    width: 320,
    height: 20,
    top: 200,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    transform: [{ rotate: '270deg' }],
    left: -130,
    top: 390,
  },
 ripplecount: {
     width: 40, 
     height: 40,
     backgroundColor: 'white',
     borderRadius: 20,
     borderColor: 'black',
     borderWidth: 1,
     position: 'absolute',
     zIndex: 100,
     top: 280,
     left: 10,
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export default Bar;



