import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens'
import { NavigationContainer } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import AuthNavigator from './src/navigators/AuthNavigator'

const App = () => {
  const [isShownSplashScreen, setIsShownSplashScreen] = useState(true)
  const [assetToken, setassetToken] = useState('')
  
  const {getItem} = useAsyncStorage('assetToken')

  useEffect(() => {
    // ham tao
    const timeout = setTimeout(() => {
      setIsShownSplashScreen(false)
    },1500)
    checkLogin();
    return () => clearTimeout(timeout);
  },[]) 
  const checkLogin = async () => {
    const token = await getItem();
    if(token){
      setassetToken(token)
    }
  }
  return (
    <>
     <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>
    {
      isShownSplashScreen ? (<SplashScreen/>) : (
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>)
    }
    </> 
  )
}
export default App
