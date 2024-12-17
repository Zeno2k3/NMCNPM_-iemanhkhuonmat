import { View, Text } from 'react-native'
import React from 'react'
import { HeaderComponent } from '../../../../components'

const DiemDanhScreen = ({navigation}: any) => {
  return (
    <>
      <HeaderComponent back title={'Điểm Danh Sinh viên'} onPrees={() => navigation.goBack()}/>
    </>
  )
}

export default DiemDanhScreen