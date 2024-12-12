import {ImageBackground, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
const LoginScreen = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>
      <ImageBackground
        style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={require('../../assets/image/SinhVien_Login.png')}>
      </ImageBackground>
    </>
  )
}

export default LoginScreen