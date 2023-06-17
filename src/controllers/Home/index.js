import HomeScreen from "../../views/Home/index"
import Orientation from 'react-native-orientation';
import { useEffect } from "react";
const Home = (props) =>{
   const { navigation, theme } = props
   console.log('-----', theme)
   useEffect(()=>{
      Orientation.lockToPortrait();
   },[])
return(
   <HomeScreen navigation = {navigation} theme = {theme} />
)
}
export default Home