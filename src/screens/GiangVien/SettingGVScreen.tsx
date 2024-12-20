import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, HeaderComponent } from '../../components'
import { Setting } from '../../assets/svg'

const SettingGVScreen = ({navigation} :any) => {
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

export default SettingGVScreen