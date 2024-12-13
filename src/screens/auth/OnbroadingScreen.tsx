import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { appInfos } from '../../constants/appInfos'
import { globalStyles } from '../../styles/globalStyles'
import { appColor } from '../../constants/appClor'

const OnbroadingScreen = ({navigation}:any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}
      >
        <View style = {{flex: 1}}>
        <Image
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover'
          }}
          source={require('../../assets/image/Onbroading-1.png')}>
        </Image>
        </View>
        <Image
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover'
          }}
          source={require('../../assets/image/Onbroading-2.png')}>
        </Image>
        <Image
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover'
          }}
          source={require('../../assets/image/Onbroading-3.png')}>
        </Image>
        <View style = {{flex: 1}}>
        <Image
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover'
          }}
          source={require('../../assets/image/Onbroading-4.png')}>
        </Image>
        <View
          style={{
            position: 'absolute',
            bottom: appInfos.size.HEIGHT * .2,
            width: appInfos.size.WIDTH,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#0054A6',
              width: appInfos.size.WIDTH* 0.8,
              height: appInfos.size.WIDTH * 0.15,
              borderRadius: 13,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', }}>Bắt đầu Thôi</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Swiper>
    </View>
  )
}

export default OnbroadingScreen

