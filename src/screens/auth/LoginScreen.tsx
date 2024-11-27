import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginScreen</Text>
      <Button title='Đăng Nhập' onPress={ async () => await AsyncStorage.setItem('assetToken', 'minhquan')}/>
    </View>
  )
}

export default LoginScreen