import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { appInfos } from '../constants/appInfos'
import { appColor } from '../constants/appClor'

const SplashScreen = () => {
  return (
    <>
      <Image 
      style={styles.image}
      source={require('../assets/image/logo.png')}
      />
      <ActivityIndicator
       color={appColor.pimary}
      />
    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create(
  {
    image: {
      width: appInfos.size.WIDTH * 1,
      resizeMode: 'center'
    },
  }
)