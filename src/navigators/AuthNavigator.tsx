import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EmailAdressScreen, LoginScreen, OnbroadingScreen, OtpScreen, SetPassWord } from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='EmailAdressScreen' component={EmailAdressScreen}/>
      <Stack.Screen name='OtpScreen' component={OtpScreen}/>
      <Stack.Screen name='SetPassWord' component={SetPassWord}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator