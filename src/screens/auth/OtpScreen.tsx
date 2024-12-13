import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, TextComponent } from '../../components'
import SpaceComponent from '../../components/SpaceComponent'

const initValue = {
    number1: '', 
    number2: '',
    number3: '',
    number4: '',
}

const OtpScreen = ({navigation}: any) => {
    const [values, setValues] = useState(initValue);
    const handleChangeValue = (key: String, value: number) => {
        const data: any = {...values}
    
        data[`${key}`] = value
        setValues(data);
    }
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
      <TextComponent text='Nhập Mã OTP' title/>
      <SpaceComponent height={20}/>
      <View style= {{flexDirection: 'row'}}>
        <SpaceComponent width={5}/>
        <InputComponent
          value={values.number1}
          onChange={val=> handleChangeValue('number1',Number(val))}
          isOTP
      />
      <SpaceComponent width={5}/>
      <InputComponent
          value={values.number2}
          onChange={val=> handleChangeValue('number2',Number(val))}
          isOTP
      />
      <SpaceComponent width={5}/>
      <InputComponent
          value={values.number3}
          onChange={val=> handleChangeValue('number3',Number(val))}
          isOTP
      />
      <SpaceComponent width={5}/>
      <InputComponent
          value={values.number4}
          onChange={val=> handleChangeValue('number4',Number(val))}
          isOTP
      />
      </View>
     <SpaceComponent height={20}/>
    <ButtonComponent text='Xác Nhận' type='primary' 
      onPress={() => navigation.navigate('SetPassWord')}
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

export default OtpScreen

const styles = StyleSheet.create({
    inputcontaier: {
      width: 100,
      height: 100
    }
})

