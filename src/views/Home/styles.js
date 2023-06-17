import { StyleSheet, Dimensions } from 'react-native'
const width1 = Math.round(Dimensions.get('window').width)
const height1 = Math.round(Dimensions.get('window').height)

const HomeStyle = StyleSheet.create({
    Home_Background:{
        backgroundColor: 'black',
     },
     Header:{
        backgroundColor: '#090b14',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center'

     },
     workout_text:{
        color: 'white',
        fontSize: 20,
        marginRight: 10,
        color: '#b2de3e'
     },
     exercise_result:{
        height: 50,
        width: '100%',
        backgroundColor: '#111525',
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:50,
        paddingRight: 50,
        justifyContent: 'space-around'
     },
     exercise_text:{
        color: 'white',
        marginLeft: 4,
        fontSize: 11,
        fontWeight: '700'
     },
     top_block:{
        marginTop: -108,
        zIndex: 100
     },
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
     inf_img:{
        width: 250,
        height: 60,
        resizeMode: 'contain' 
     },
     create:{
      fontSize: 24,
      fontWeight: '700',
      color: '#E6E6E6'
     },
     guide:{
       width: 270,
       height: 57,
       backgroundColor: '#2D1735',
       borderRadius: 4,
       marginTop: 8,
       justifyContent: 'center',
       padding: 12
     },
     guide_text: {
      fontSize: 13,
      fontWeight: '600',
      color: '#E6E6E6'
     },
     right_mark_view:{
      marginTop: 14,
      flexDirection: 'row'
     },
     right_mark: {
      width: 15,
      height: 10
     },
     right_mark_text:{
      color: '#FFFFFF',
      marginLeft: 8,
      fontSize: 9.15,
      fontWeight: '600'
     },
     cutomizebtn:{
      width: 138,
      height: 40,
      backgroundColor: '#B2DE3E',
      borderRadius:4,
      marginTop: 12,
      paddingHorizontal: 12,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center' 
     },
    explore_btn: {
      height: 29,
      width: 89,
      backgroundColor: '#111525',
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    } 

})

export { HomeStyle }
