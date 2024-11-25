import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoginScreen, SplashScreen } from './src/screens'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const [isShownSplashScreen, setIsShownSplashScreen] = useState(true)

  useEffect(() => {
    // ham tao
    const timeout = setTimeout(() => {
      setIsShownSplashScreen(false)
    },1500)
    // ham huy
    return () => clearTimeout(timeout);
  },[]) // chi chay 1 lan

  return (
    isShownSplashScreen ? <SplashScreen/> : <NavigationContainer>
      <LoginScreen/>
    </NavigationContainer> 
  )
}

export default App