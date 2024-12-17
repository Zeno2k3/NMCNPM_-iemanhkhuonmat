import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ReactNode} from 'react';
import {appColor} from '../../../../constants/appClor';
import {TextComponent} from '../../../../components';
import DSSVScreen from '../monhoc/DSSVScreen';
import DiemDanhScreen from '../monhoc/DiemDanhScreen';
import {Element3, UserSquare} from 'iconsax-react-native';

const TabSvNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon: ({focused, color, size}) => {
          let icon: ReactNode;
          color = focused ? appColor.blue : appColor.black;
          switch (route.name) {
            case 'DSSV':
              icon = focused ? (
                <UserSquare size="24" color={appColor.blue} variant="Bold" />
              ) : (
                <UserSquare size="24" color={appColor.black} variant="Linear" />
              );
              break;
          }
          switch (route.name) {
            case 'Điểm Danh':
              icon = focused ? (
                <Element3 size="24" color={appColor.blue} variant="Bold" />
              ) : (
                <Element3 size="24" color={appColor.black} variant="Linear" />
              );
              break;
          }
          return icon;
        },
        tabBarLabel({focused}) {
          return (
            <TextComponent
              text={route.name}
              color={focused ? appColor.blue : appColor.black}
            />
          );
        },
      })}>
      <Tab.Screen name="Sinh Viên Chưa Điểm Danh" component={DSSVScreen} />
      <Tab.Screen name="Chỉnh Sửa" component={DiemDanhScreen} />
    </Tab.Navigator>
  );
};

export default TabSvNavigator;
