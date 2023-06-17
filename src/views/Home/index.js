// import React, {useState} from "react"
import { Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { HomeStyle } from "./styles"
import Exercises from "../../components/HomeExersises/Exercises"
import { ExerciseData } from "../../constants/appConstants"
import { useState } from "react"
import Strings from "../../constants/strings"
import DropdownComponent from "../../components/Homedropdown"
import FooterComponent from "../../components/Homefooter/footer"
import GoalComponent from "../../components/Homegoal/homegoal"
const HomeScreen = (props) =>{
const { navigation, theme} = props
console.log('ppppp', theme)
return(
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: theme == undefined ? 'black' : theme.backgroundColor}}>
      <View>
        <View style = {[HomeStyle.Header, {backgroundColor: theme == undefined ? 'black' : theme.headerColor}]}>
          <View>
          <Image style={{ width: 110, height: 40, resizeMode: 'contain' }} source={require('../../assets/getactyv.png')}/>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Text style = {HomeStyle.workout_text} >{Strings.homeScreen.workout}</Text>
            <Image style={{ width: 40, height: 25, resizeMode: 'contain' }} source={require('../../assets/profileimg.png')}/>
          </View>
        </View>
        <View  style = {[HomeStyle.exercise_result, {backgroundColor: theme == undefined ? 'black' : theme.headerColor1}]}>
           <View style={{flexDirection: 'row', alignItems: 'center'}} >
             <Image source={require('../../assets/watch.png')} />
             <Text style = {HomeStyle.exercise_text} >3568 min</Text>
           </View>
           <View style={{flexDirection: 'row', alignItems: 'center'}} >
             <Image source={require('../../assets/watch.png')} />
             <Text style = {HomeStyle.exercise_text} >24 excercises</Text>
           </View>
           <View style={{flexDirection: 'row', alignItems: 'center'}} >
             <Image source={require('../../assets/watch.png')} />
             <Text style = {HomeStyle.exercise_text} >21 streaks</Text>
           </View>
        </View>
        <View style={{  backgroundColor: theme == undefined ? 'black' : theme.backgroundColor, marginTop: 130  }} >
        <View style = { HomeStyle.top_block } >
        <Text style = {[HomeStyle.customize_text, {color: theme == undefined ? 'white' : theme.fontColor1}]} >{Strings.homeScreen.program}</Text>
        <ImageBackground style={HomeStyle.top_block_background} source={require('../../assets/top_block_background.png')} >
         <View style={{marginLeft: 24, marginTop: 20}} >
           <Text style={[HomeStyle.create]}>{Strings.homeScreen.create}</Text>
           <Text style={[HomeStyle.create, {color: '#B2DE3E'}]}>{Strings.homeScreen.aiprogram}</Text>
           <View style={HomeStyle.guide} >
             <Text style={HomeStyle.guide_text} ><Text style={{ color:'#9778A1' }} >{Strings.homeScreen.ultimate}</Text> {Strings.homeScreen.guided}</Text>
           </View>
           <View style={HomeStyle.right_mark_view} >
             <Image style={HomeStyle.right_mark} source={require('../../assets/green_right_mark.png')} />
             <Text style={HomeStyle.right_mark_text} >{Strings.homeScreen.right_text}</Text>
           </View>
           <View style={HomeStyle.right_mark_view} >
             <Image style={HomeStyle.right_mark} source={require('../../assets/green_right_mark.png')} />
             <Text style={HomeStyle.right_mark_text} >{Strings.homeScreen.right_text1}</Text>
           </View>
           <DropdownComponent/>
           <TouchableOpacity style={HomeStyle.cutomizebtn} >
            <Text style={{fontSize:12, fontWeight: '700', color: 'black'}} >{Strings.homeScreen.cutomise}</Text>
            <Image style={{ height: 16, width: 16, marginLeft: 8 }} source={require('../../assets/customize_inner_img.png')} />
           </TouchableOpacity>
         </View>
        </ImageBackground>
        {/* <GoalComponent/> */}
        </View>
        <View>
        <View>
        <FlatList
          style={{ marginTop: 0, marginLeft: -3 }}
          data={ExerciseData}
          renderItem={({ item }) => {
              return(
                <View style={{ paddingLeft: 24 }}>
                    <View style = {{ flexDirection: 'row', alignItems: 'center', marginTop: 28, marginBottom: 16 }} >
                      <Text style={{color: theme == undefined ? 'white' : theme.fontColor1 , fontSize: 16, fontWeight: '500', marginRight: 12}} >{item.name}</Text>
                      <TouchableOpacity style={HomeStyle.explore_btn} >
                        <Text style={{color: '#9DA7CE', fontSize: 10}} >explore more</Text>
                      </TouchableOpacity>
                    </View>
                   <FlatList
                      data={item.workouts}
                      horizontal={true}
                      renderItem={({item})=> <Exercises
                          item={item}
                          theme={theme}
                          navigation={navigation}
                      />
                    }
                   />
                </View>

              )
          }}
          />
        </View>
        </View>
        <FooterComponent/>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
)
}
export default HomeScreen