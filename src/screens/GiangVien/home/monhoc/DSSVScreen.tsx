import React from 'react'
import { HeaderComponent } from '../../../../components'
import { ScrollView, StyleSheet, View } from 'react-native'
import StudentItem from '../components/StudentItem'
import { appColor } from '../../../../constants/appClor'
const DSSVScreen = ({navigation}: any) => {
  return (
    <>
      <HeaderComponent back title={'Danh Sách Sinh Viên'} onPrees={() => navigation.goBack()}/>
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'/>
        </ScrollView>
      </View>
    </>
  )
}

export default DSSVScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: appColor.white,
    },
})
