import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, SpaceComponent, TextComponent } from '../../components';
import { Lock, Login, Sms } from 'iconsax-react-native';

const SetPassWord = ({navigation}: any) => {
  const [password, setPassWord] = useState('');
  const [confimPassWord, setconfimPassWord] = useState('');
  return (
      <View 
        style = {{
        flex: 1}}>
        <View
        style = {{
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextComponent text='Đặt Lại Mật Khẩu' title/>
          <SpaceComponent height={20}/>
          <InputComponent
            icon_affix = {<Lock size={32} variant="Bold"/>}
            value = {password}
            onChange={val => setPassWord(val)}
            placeHolder='password new'
            isPassWord
          />
          <SpaceComponent height={10}/>
          <InputComponent
            icon_affix = {<Login
            size="32"
            variant="Bold"
           />}
            value = {confimPassWord}
            onChange={val => setconfimPassWord(val)}
            placeHolder='confirm password'
            isPassWord
         />
          <SpaceComponent height={20}/>
          <ButtonComponent text='Xác Nhận' type='primary' 
          onPress={() => navigation.navigate('LoginScreen')}
          />

        </View>
        <View
          style = {{
            flex: 4
          }}>

        </View>
      </View>
  )
}

export default SetPassWord