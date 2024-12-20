import { Image, StyleSheet, ActivityIndicator } from 'react-native'
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
      flex: 2,
      width: appInfos.size.WIDTH,
      resizeMode: 'contain'
    },
  }
)