import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoginScreen, SplashScreen } from './src/screens'
import { NavigationContainer } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import TabNavigator from './src/navigators/TabNavigator'
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
    // ham huy
    return () => clearTimeout(timeout);
  },[]) // chi chay 1 lan
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
        {
          !assetToken ? <TabNavigator/> : <AuthNavigator/>
        } 
      </NavigationContainer>)
    }
    </> 
  )
}
export default App