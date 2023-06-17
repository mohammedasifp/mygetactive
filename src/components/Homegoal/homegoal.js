import { Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native"
import Strings from '../../constants/strings'
const GoalComponent = () =>{
 
    return(
        <ImageBackground style={HomeStyle.top_block_background} source={require('../../assets/top_block_background.png')} >
         <View style={{marginLeft: 24, marginTop: 20}} >
           <Text style={HomeStyle.create}>Shashank's 28-days</Text>
           <Text style={[HomeStyle.create, {color: '#B2DE3E'}]}>AI workout plan</Text>
           <View style={HomeStyle.guide} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image style={{ width: 15.78, height: 15.68 }} source={require('../../assets/arrow.png')} />
                <Text style={HomeStyle.guide_text} ><Text style={{ color:'#9778A1' }} >  goal:</Text> lose weight</Text>
            </View>
           </View>
           <View style = {HomeStyle.goalresult_view} >
              <Text style={HomeStyle.goalresult_text} >AI analysis:  </Text>
              <Text style={{ color: 'white' }} >347kcal burnt in total</Text>
           </View>
           <TouchableOpacity style={HomeStyle.cutomizebtn} >
            <Text style={{fontSize:15, fontWeight: '700', color: 'black'}} >Start Day 17</Text>
           </TouchableOpacity>
         </View>
        </ImageBackground>
    )
}

export default GoalComponent;

const HomeStyle = StyleSheet.create({
     customize_text:{
        color: 'white',
        fontSize: 16,
         fontWeight: '500',
        marginLeft: 24
     },
     top_block_background:{
        height: 338,
        width: 310,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 16
     }, 
     i_want_btn:{
        height: 40,
        backgroundColor: '#2b1633',
        width: 212, borderRadius: 5,
        marginTop: 10, alignItems: 'center',
        flexDirection: 'row', 
     },
     i_want_text:{
        fontSize: 14.5,
         fontWeight: '600',
        marginLeft: 10, color: '#9778A1'
     },
     arrow:{
        height: 16,
        width: 15.48,
        resizeMode: 'contain',
        marginLeft: 12.8
     },
     create:{
      fontSize: 24,
      fontWeight: '700',
      color: '#E6E6E6'
     },
     guide:{
       width: 170,
       height: 40,
       backgroundColor: '#2D1735',
       borderRadius: 4,
       marginTop: 20,
       justifyContent: 'center',
       padding: 12
     },
     guide_text: {
      fontSize: 13,
      fontWeight: '600',
      color: '#E6E6E6'
     },
     cutomizebtn:{
      width: 138,
      height: 40,
      backgroundColor: '#B2DE3E',
      borderRadius:4,
      marginTop: 25,
      paddingHorizontal: 12,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
     },
     goalresult_view: {
       width: 240,
       height: 40,
       backgroundColor: '#2D2231',
       borderRadius: 30,
       marginTop: 25,
       padding: 10,
       flexDirection: 'row',
       alignItems: 'center'
     },
     goalresult_text:{
        fontWeight: '700',
        color: 'white'
     }
 

})