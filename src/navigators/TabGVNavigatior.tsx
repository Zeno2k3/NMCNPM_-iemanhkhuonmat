import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen} from '../screens';
import SetingsNavigator from './SetingsNavigator';
import { appColor } from '../constants/appClor';
import { Element3, Setting2, UserSquare } from 'iconsax-react-native';
import { TextComponent } from '../components';
import MainHomeGVNavigator from './MainHomeGVNavigator';

const TabGVNavigatior = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 1,
                height:60,
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarIcon:({focused, color, size}) => {
                let icon: ReactNode;
                color = focused ? appColor.blue : appColor.black
                switch (route.name) {
                    case 'Cá Nhân':
                    icon =  focused ? <UserSquare size="24" color={appColor.blue} variant="Bold"/> : <UserSquare size="24" color={appColor.black} variant="Linear"/>
                    break;
                }
                switch (route.name) {
                    case 'Trang Chủ':
                    icon =  focused ? <Element3 size="24" color={appColor.blue} variant="Bold" /> : <Element3 size="24" color={appColor.black} variant="Linear"/> 
                    break;
                }
                switch (route.name) {
                    case 'Cài Đặt':
                    icon =  focused ? <Setting2 size="24" color={appColor.blue} variant="Bold" /> : <Setting2 size="24" color={appColor.black} variant="Linear"/> 
                    break;
                }
                return icon;
            },
            tabBarLabel({focused}) {
                return (
                    <TextComponent
                        text= {route.name}
                        color= {focused ? appColor.blue : appColor.black}
                    />
                )
            },
        })}>
            <Tab.Screen name='Cá Nhân' component={ProfileScreen}/>
            <Tab.Screen name='Trang Chủ' component={MainHomeGVNavigator}/>
            <Tab.Screen name='Cài Đặt' component={SetingsNavigator}/>
        </Tab.Navigator>
    )
}

export default TabGVNavigatior