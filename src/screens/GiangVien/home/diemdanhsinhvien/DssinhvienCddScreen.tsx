import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import StudentItem from '../components/StudentItem'
import { appColor } from '../../../../constants/appClor'
import { ButtonComponent } from '../../../../components'

const DssinhvienCddScreen = () => {
  return (
    <View style = {styles.container}>
        <ScrollView>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087'  backGround/>
          <ButtonComponent text = 'Điểm Danh Thủ Công' type='primary'/>
        </ScrollView>
    </View>
  )
}

export default DssinhvienCddScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: appColor.gray2,
    }
})