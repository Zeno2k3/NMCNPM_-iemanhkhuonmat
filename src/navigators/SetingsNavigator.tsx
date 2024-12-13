import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SettingGVScreen } from '../screens';

const SetingsNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='SettingGVScreen' component={SettingGVScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      </Stack.Navigator>
    )
}

export default SetingsNavigator