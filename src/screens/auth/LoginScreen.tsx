import {ImageBackground,  StatusBar,  View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { ButtonComponent, InputComponent, } from '../../components'
import { Email, Login, Login2, } from '../../assets/svg'
import { Lock} from 'iconsax-react-native'
import { appInfos } from '../../constants/appInfos'
import SpaceComponent from '../../components/SpaceComponent'
import { appColor } from '../../constants/appClor'
import ToggleSwitch from 'toggle-switch-react-native'
import AuthAPI from '../../apis/authApi'
import authenticationAPI from '../../apis/authApi'

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSv , setisSv ] = useState(true);
  const handleCheckSV = () => {
    setIsEnabled(!isEnabled);
    setisSv(!isSv)
  }
  const handleLogin = async () => {
    try {
      const res = await authenticationAPI.HandAuthentication('/hello')
    } 
    catch(error){
      console.log(error)
    }
  }
  useLayoutEffect(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'},
      });
      return () => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            borderTopWidth: 0,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          },
        });
      };
    }, [navigation]);
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
        <View
         style = {{
          flex: 5.5,
          width: appInfos.size.WIDTH * 0.7 ,
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
          }}
        >
          <SpaceComponent width={10}/>
           <ToggleSwitch
              isOn={isEnabled}
              onColor= {appColor.blue}
              icon = { !isEnabled ? <Login/> : <Login2/>}
              thumbOffStyle={{
                backgroundColor: appColor.blue,  
                width: 30,               
                height: 30,            
                borderRadius: 15,
                marginTop: 10,        
              }}
              thumbOnStyle={{
                backgroundColor: appColor.yellow, 
                width: 30,               
                height: 30,              
                borderRadius: 15,        
              }}
              offColor= {appColor.white}
              size='large'
              onToggle={() =>handleCheckSV()}
           />
        </View>
        <View  
        style = {{
          flex: 5.5,
          width: appInfos.size.WIDTH,
          height: appInfos.size.HEIGHT * 0.5,
          alignItems: 'center',
          }}>
        <InputComponent
          icon_affix = {<Email/>}
            value = {email}
            onChange={val => setEmail(val)}
            placeHolder='email'
            allowClear
        />
        <SpaceComponent height={20} width={20}/>
        <InputComponent
            icon_affix = {<Lock variant="Bold"/>}
            value = {password}
            onChange={val => setPassword(val)}
            placeHolder='password'
            isPassWord
        />
          <SpaceComponent height={20}/>
          <ButtonComponent text='Đăng Nhập' type='primary'onPress={() => {isSv ?  navigation.navigate('TabSVNavigatior'): navigation.navigate('TabGVNavigatior')}}/>
          <ButtonComponent text='Quên mật khẩu' type='link' 
          onPress={() => navigation.navigate('EmailAdressScreen')}
          />
          <ButtonComponent text='Test' type='link' 
          onPress={handleLogin}
          />
        </View>
      </ImageBackground>
    </>
  )
}

export default LoginScreen