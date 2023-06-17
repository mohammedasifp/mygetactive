import { Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { useState } from "react"
const [ showGoalList, setShowGoalList] = useState(false)
const [myGoal, setMyGoal] = useState('loose weight')
const HomeTopBlock = () => {
   return(
    <View style = { HomeStyle.top_block } >
    <Text style = {HomeStyle.customize_text} >Customize Program</Text>
    <ImageBackground style={HomeStyle.top_block_background} source={require('../../assets/top_block_background.png')} >
    <View style={{marginLeft: 24, marginTop: 20}} >
     <Image style={HomeStyle.inf_img} source={require('../../assets/top_block_inf1.png')} />
     <Image style={{ width: 270, height: 130, resizeMode: 'cover', marginTop: 10 }} source={require('../../assets/top_block_inf.png')} />
     <View style={{ zIndex: 100000000 }} >
     <TouchableOpacity onPress={()=>{ setShowGoalList(!showGoalList) }} style={HomeStyle.i_want_btn}>
        <Image style={HomeStyle.arrow} source={require('../../assets/arrow.png')} />
        <Text style={HomeStyle.i_want_text} >I want to</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
          <Text style={{fontSize: 14.5, fontWeight: '600', marginLeft: 5, color: 'white'}}>{myGoal}</Text>
          <Image style={{ height: 15, width: 10, resizeMode: 'contain', marginLeft:5  }} source={require('../../assets/down_arrow.png')} />
        </View>
     </TouchableOpacity>
    { showGoalList && <GoalList myGoal = {setMyGoal} />}
     </View>
     <TouchableOpacity style={{ width: 138, height: 40, backgroundColor: '#B2DE3E', borderRadius:4, marginTop: 8, paddingHorizontal: 12, paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} >
       <Text style={{fontSize:12, fontWeight: '700', color: 'black'}} >customize now</Text>
       <Image style={{ height: 16, width: 16, marginLeft: 8 }} source={require('../../assets/customize_inner_img.png')} />
     </TouchableOpacity>
     </View>
    </ImageBackground>
 </View>
   )
}

export default HomeTopBlock