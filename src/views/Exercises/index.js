import { Text, TouchableOpacity, View, Image, StyleSheet, ImageBackground} from 'react-native'
import { workouts } from '../../constants/appConstants'
import { newexercises } from '../../constants/appConstants'
import { FlatList } from 'react-native'
const Exercises = ({navigation}) => {

  const StartSessionVideoScreen = (item) => {
    navigation.navigate('Practice', {item})
  }
return(
    <View style = {{ marginTop: 5, marginLeft: 0 }} >
        <FlatList
         data={newexercises}
         style={{ width: '100%' }}
         numColumns={2}
         renderItem={({item})=>{
            return (
                <View style={ExerciseStyle.ExerciseContainer} >
                     <TouchableOpacity onPress={()=>{StartSessionVideoScreen(item)}} >
                     <ImageBackground
                       source={{uri: item.imageurl}}
                       style={ExerciseStyle.Exercisesimage}
                        imageStyle={{ borderRadius: 8}}>
                          <TouchableOpacity style={{ position: 'absolute', right: 8, top: 8 }} >
                            <Image style={ExerciseStyle.threedots} source={require('../../assets/three-dots.png')} />
                          </TouchableOpacity>  
                          <View style={ExerciseStyle.Exercisesimage_content} >
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }} >{item.name}</Text>
                                { item.category == 'routine' ?
                                <Text style={{ fontSize: 12, fontWeight: '600', color: '#C3F73A' }} >AI ACTIVATION</Text> :
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 14, height: 14 }} source={require('../../assets/white_watch.png')} />
                                <Text style={{color: 'white', fontSize: 10, fontWeight: '600', marginLeft: 4}} >18 min</Text>
                             </View>}
                            </View>
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/video_icon.png')} />
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
         }}
         />
   </View>
)
}

export default Exercises


const ExerciseStyle = StyleSheet.create({
    ExerciseContainer:{
      marginBottom: 5,
      width: '48%',
      marginLeft: '1.3%'    
    },
    Exercisesimage:{
        width: '100%',
        height: 200,
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
      width: 17,
      height: 17
    }
})