import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGVScreen, UpDateFaceScreen } from '../screens';

const MainHomeScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='HomeGVScreen' component={HomeGVScreen}/>
        <Stack.Screen name = 'UpDateFaceScreen' component={UpDateFaceScreen}/>
      </Stack.Navigator>
    )
}

export default MainHomeScreen