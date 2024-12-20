import { View} from 'react-native'
import React from 'react'
import { ButtonComponent, HeaderComponent, SpaceComponent } from '../../components'
import { Setting } from '../../assets/svg'
import { appColor } from '../../constants/appClor'
const SettingScreen = ({navigation}: any) => {
  return (
    <>
      <HeaderComponent title='Cài đặt' icon = {<Setting/>}/>
     
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ButtonComponent text="Đăng Xuất" type='primary' onPress={() => {navigation.navigate('LoginScreen')}}/>
      </View>
    </>
  )
}

export default SettingScreen