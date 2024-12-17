import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGVScreen, ListClassScreen, MainMHScreen, TabSvNavigator } from '../screens';
import DSSVScreen from '../screens/GiangVien/home/monhoc/DSSVScreen';
import DiemDanhScreen from '../screens/GiangVien/home/monhoc/DiemDanhScreen';

const MainHomeGVNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='HomeGVScreen' component={HomeGVScreen}/>
        <Stack.Screen name='ListClassScreen' component={ListClassScreen}/>
        <Stack.Screen name='TabSVScreen' component={TabSvNavigator}/>
        <Stack.Screen name='MainMHScreen' component={MainMHScreen}/>
        <Stack.Screen name= 'DSSV' component={DSSVScreen}/>
        <Stack.Screen name= 'DiemDanhScreen' component={DiemDanhScreen}/>
      </Stack.Navigator>
    )
}
export default MainHomeGVNavigator