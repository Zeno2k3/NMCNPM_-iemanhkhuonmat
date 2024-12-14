import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGVScreen } from '../screens';
import ListClassScreen from '../screens/GiangVien/home/ListClassScreen';

const MainHomeGVNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='HomeGVScreen' component={HomeGVScreen}/>
        <Stack.Screen name='ListClassScreen' component={ListClassScreen}/>
      </Stack.Navigator>
    )
}
export default MainHomeGVNavigator