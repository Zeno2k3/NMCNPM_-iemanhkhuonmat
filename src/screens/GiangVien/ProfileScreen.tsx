import { View, Text } from 'react-native'
import React from 'react'
import { SpaceComponent, TextComponent } from '../../components'
import { Image } from 'react-native'
import { LogoProfileGV } from '../../assets/svg'
import { globalStyles } from '../../styles/globalStyles'
import { fontFamilies } from '../../constants/appfontFamilies'


const ProfileScreen = () => {
  return (
    <View style= {[globalStyles.container, {alignItems: 'center'}]}>
      <SpaceComponent height={100}/>
      <LogoProfileGV/>
      <SpaceComponent height={10} />
      <TextComponent text='Hi Teacher' styles={{
        fontFamily: fontFamilies.medium,
        fontSize: 24
      }}/>
      <SpaceComponent height={60}/>
      <View style= {[globalStyles.row]}>
          <TextComponent text='Họ và Tên :   '/>
          <TextComponent text='Teacher name'/>
      </View>
      <View style= {[globalStyles.row]}>
          <TextComponent text='Ngày sinh :   '/>
          <TextComponent text='dd/mm/yyyy'/>
      </View>
      <View style= {[globalStyles.row]}>
          <TextComponent text='Học vị :  '/>
          <TextComponent text='Tiến Sĩ'/>
      </View>
    </View>

  )
}

export default ProfileScreen