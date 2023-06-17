import { Text, View, StyleSheet } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const Timer = ({time}) => (
    <View style={styles.timerContainer} >
    <CountdownCircleTimer
    isPlaying
    duration={20}
    colors={['#ffff']}
    // colorsTime={[7, 5, 2, 0]}
    size={70}
    strokeWidth={8}
    strokeLinecap={'round'}
    trailColor={'grey'}
    style={{ backgroundColor: 'red' }}
  >
    {({ remainingTime }) => <View style={{ width: 60, height: 60, backgroundColor: 'black', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{ color: 'white', fontSize: 20 }} >{remainingTime}</Text>
        <Text style={{ color: 'white', fontSize: 14 }}>sec</Text>
      </View>}
  </CountdownCircleTimer>
    </View>
)
export default Timer;

const styles = StyleSheet.create({
   timerContainer:{
    position: 'absolute',
    zIndex: 10,
    right: 20,
    top: 20
   }
})