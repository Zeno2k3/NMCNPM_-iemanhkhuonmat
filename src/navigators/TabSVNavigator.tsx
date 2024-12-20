import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LichSuScreen, SettingScreen, ThongKeScreen } from '../screens';
import MainHomeSVScreen from './MainHomeSVScreen';
import DiemDanhSv from './DiemDanhSv';
import { appColor } from '../constants/appClor';
import { Chart, Chart2, ChartCircle, Element3, Maximize, Maximize2, Setting2, UserSquare } from 'iconsax-react-native';
import { TextComponent } from '../components';

const TabSVNavigator = () => {
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
                    case 'Thống Kê':
                    icon =  focused ? <Chart2 size="24" color={appColor.blue} variant= 'Bold' /> : <Chart2 size="24" color={appColor.black} variant="Linear"/> 
                    break;
                }
                switch (route.name) {
                    case 'Điểm Danh':
                    icon =  focused ? <Maximize2 size="24" color={appColor.blue} variant="Bold" /> : <Maximize2 size="24" color={appColor.black} variant="Linear"/> 
                    break;
                }
                switch (route.name) {
                    case 'Lịch Sử':
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
                        styles = {
                            {fontSize: 8}
                        }
                    />
                )
            },
        })}>
            <Tab.Screen name='Cá Nhân' component={MainHomeSVScreen}/>
            <Tab.Screen name='Thống Kê' component={ThongKeScreen}/>
            <Tab.Screen name='Điểm Danh' component={DiemDanhSv}/>
            <Tab.Screen name='Lịch Sử' component={LichSuScreen}/>
            <Tab.Screen name='Cài Đặt' component={SettingScreen}/>
        </Tab.Navigator>
    )
}

export default TabSVNavigator