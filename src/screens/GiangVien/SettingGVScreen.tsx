import { View, Text } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../components'
import { Setting } from '../../assets/svg'

const SettingGVScreen = () => {
  return (
    <>
      <HeaderComponent title='Cài đặt' icon = {<Setting/>}/>
    </>
  )
}

export default SettingGVScreen