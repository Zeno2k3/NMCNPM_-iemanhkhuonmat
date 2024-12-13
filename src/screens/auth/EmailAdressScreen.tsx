import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, TextComponent } from '../../components'
import SpaceComponent from '../../components/SpaceComponent';
import { Sms } from 'iconsax-react-native';

const EmailAdressScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  return (
      <View 
        style = {{
        flex: 1}}>
        <View
        style = {{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextComponent text='Nhập email' title/>
          <SpaceComponent height={20}/>
          <InputComponent
          icon_affix = {<Sms size={32}/>}
            value = {email}
            onChange={val => setEmail(val)}
            placeHolder='email'
            allowClear
        />
          <SpaceComponent height={20}/>
          <ButtonComponent text='Gửi' type='primary' 
          onPress={() => navigation.navigate('OtpScreen')}
          />

        </View>
        <View
          style = {{
            flex: 5
          }}>

        </View>
      </View>
  )
}

export default EmailAdressScreen