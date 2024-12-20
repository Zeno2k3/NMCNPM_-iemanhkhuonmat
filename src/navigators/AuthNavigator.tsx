import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EmailAdressScreen, LoginScreen, OnbroadingScreen, OtpScreen, SetPassWord } from '../screens';
import TabNavigator from './TabSVNavigator';
import TabGVNavigatior from './TabGVNavigatior';
import TabSVNavigator from './TabSVNavigator';

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
      <Stack.Screen name='TabNavigatior' component={TabNavigator}/>
      <Stack.Screen name='TabGVNavigatior' component={TabGVNavigatior}/>
      <Stack.Screen name='TabSVNavigatior' component={TabSVNavigator}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator