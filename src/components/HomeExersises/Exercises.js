import { Text, TouchableOpacity, View, Image, StyleSheet, ImageBackground} from 'react-native'
import FastImage from 'react-native-fast-image'

const Exercises = ({item, navigation, theme}) => {
  const StartSessionVideoScreen = (item) => {
    if(item.category == 'routine'){
      navigation.navigate('ExercisesList')
    }else{
      navigation.navigate('StartSessionVideo')
    }
  }
    return (
        <View style={ExerciseStyle.ExerciseContainer} >
             <TouchableOpacity onPress={()=>{StartSessionVideoScreen(item)}} >
             <ImageBackground
               source={{uri: item.url}}
               style={ExerciseStyle.Exercisesimage}
                imageStyle={{ borderRadius: 8}}>
                  <TouchableOpacity style={{ position: 'absolute', right: 8, top: 8 }} >
                    <Image style={ExerciseStyle.threedots} source={require('../../assets/three-dots.png')} />
                  </TouchableOpacity>  
                  <View style={ExerciseStyle.Exercisesimage_content} >
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: '700', color: theme == undefined ? 'white' : theme.fontColor1 }} >UPPER BODY</Text>
                        { item.category == 'routine' ?
                        <Text style={{ fontSize: 12, fontWeight: '600', color: '#C3F73A' }} >AI ACTIVATION</Text> :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 14, height: 14 }} source={require('../../assets/white_watch.png')} />
                        <Text style={{color: 'white', fontSize: 10, fontWeight: '600', marginLeft: 4}} >18 min</Text>
                     </View>}
                    </View>
                    <Image style={{ width: 37, height: 37 }} source={require('../../assets/video_icon.png')} />
                 </View>  
              </ImageBackground>
             </TouchableOpacity>
            { item.category == 'routine' && <View style={ExerciseStyle.bottomstrip}>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Image style={ExerciseStyle.multivideo_icon} source={require('../../assets/multivideo_icon.png')} />
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 600, marginLeft: 4 }} >5 Exersises</Text>
                 </View>
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 14, height: 14 }} source={require('../../assets/white_watch.png')} />
                    <Text style={{color: 'white', fontSize: 10, fontWeight: '600', marginLeft: 4}} >18 min</Text>
                 </View>
              </View>}
       </View>
      )
}


export default Exercises

const ExerciseStyle = StyleSheet.create({
    ExerciseContainer:{
      marginRight: 12
    },
    Exercisesimage:{
        width: 224,
        height: 240,
    },
    Exercisesimage_content:{
     flexDirection: 'row',
     alignItems: 'center',
     position: 'absolute',
     width: '100%',
     bottom : 18, 
     justifyContent: 'space-between',
     paddingLeft: 16,
     paddingRight:16
    },
    bottomstrip:{
        height: 40,
        width:224,
        backgroundColor: '#111525',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingLeft: 16,
        paddingRight:16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -5
    },
    multivideo_icon:{
        width: 16,
        height: 16
    },
    threedots: {
      width: 24,
      height: 24
    }
})