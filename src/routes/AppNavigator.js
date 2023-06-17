import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../controllers/Home';
import StartSessionVideo from '../controllers/StartSessionVideo';
import Practice from '../controllers/Practice';
import ExercisesList from '../controllers/ExercisesList';
const Stack = createNativeStackNavigator();
 const AppNavigator = (props) => {
  const {theme} = props

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
         {/* <Stack.Screen name='Home' component={Home} options={{headerShown: false}} /> */}
         <Stack.Screen name="Home" options={{ headerShown: false }}>
           {props => <Home theme={theme} {...props} />}
         </Stack.Screen>
         <Stack.Screen name='ExercisesList' component={ExercisesList}  options={{headerShown: false}}  />
         <Stack.Screen name='StartSessionVideo' component={StartSessionVideo} options={{headerShown: false}} />
         <Stack.Screen name='Practice' component={Practice} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
