import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, UpDateFaceScreen } from '../screens';

const MainHomeSVScreen = () => {
  
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='HomeSVScreen' component={HomeScreen}/>
      <Stack.Screen name = 'UpDateFaceScreen' component={UpDateFaceScreen}/>
    </Stack.Navigator>
  )
}

export default MainHomeSVScreen