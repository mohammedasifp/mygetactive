import Orientation from 'react-native-orientation';
import { useEffect, useState } from "react";
import PracticePage1 from '../../views/practice/index1';
import PracticePage from '../../views/practice/index';
const Practice = (props) =>{
    const [myOrientation, setMyOrientation] = useState(true)
   const { navigation} = props
   const { item } = props.route.params
   useEffect(()=>{
    // Orientation.lockToLandscape();
    // Orientation.lockToPortrait();
    Orientation.unlockAllOrientations();
    Orientation.addOrientationListener(orientationDidChange);
    return () => {
        Orientation.lockToPortrait();
    };
 },[])
 const orientationDidChange = (orientationDidChange) =>{
   console.log(orientationDidChange)
    
    if( orientationDidChange == 'PORTRAIT'){
        // Orientation.lockToPortrait();
        setMyOrientation(true)
    }else{
        // Orientation.lockToLandscape();
        setMyOrientation(false)
    }
 }
 const lockToLandscape = () => {
    Orientation.lockToLandscape();
 }
return(
<>
{ myOrientation  ?
   <PracticePage navigation = {navigation} lockToLandscape = {lockToLandscape} item = {item} />:
   <PracticePage1 navigation = {navigation} lockToLandscape = {lockToLandscape} item = {item} />
   }</>
)
}
export default Practice