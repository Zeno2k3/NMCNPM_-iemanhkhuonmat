import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DssinhvienCddScreen from '../diemdanhsinhvien/DssinhvienCddScreen';
import { Text, View } from 'react-native';
import DanhSachDiemDanh from '../diemdanhsinhvien/DanhSachDiemDanh';

const TabSvNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
    }}>
      <Tab.Screen
        name="Danh Sách SV"
        component={DanhSachDiemDanh}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ alignItems: 'center',flexDirection: 'row' }}>
              <Text style={{ fontSize: 10, color }}>Danh Sách SV</Text>
            </View>
          ),
        }}
      />
     <Tab.Screen
        name="SV chưa điểm danh"
        component={DssinhvienCddScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ alignItems: 'center',flexDirection: 'row'}}>
              <Text style={{ fontSize: 10, color }}>SV chưa điểm danh</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabSvNavigator;
