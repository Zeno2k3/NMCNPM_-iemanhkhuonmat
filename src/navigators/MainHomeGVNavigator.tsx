import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGVScreen } from '../screens';

const MainHomeGVNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='HomeGVScreen' component={HomeGVScreen}/>
      </Stack.Navigator>
    )
}
export default MainHomeGVNavigator