import { TouchableOpacity, View, Text } from "react-native";

const MyTestButton = ({text, width, bgColor, radius, height, color}) =>{

    return(
        <TouchableOpacity 
          style={{ 
          width: width,
          height: height,
          backgroundColor: bgColor,
          borderRadius: radius,
          justifyContent: 'center',
          alignItems: 'center'
           }}  >
           <Text style={{ color: color }} >{text}</Text>
        </TouchableOpacity>
    )
}

export default MyTestButton;