import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, SettingGVScreen } from '../screens';
import MainHomeGVNavigator from './MainHomeGVNavigator';
import TabNavigator from './TabNavigator';
import SetingsNavigator from './SetingsNavigator';

const TabGVNavigatior = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
            
        }}>
            <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Tab.Screen name='MainHomeGVScreen' component={MainHomeGVNavigator}/>
            <Tab.Screen name='SetingsNavigator' component={SetingsNavigator}/>
        </Tab.Navigator>
    )
}

export default TabGVNavigatior