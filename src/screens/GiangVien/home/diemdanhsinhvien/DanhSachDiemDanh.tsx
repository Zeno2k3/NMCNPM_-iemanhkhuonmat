import { ScrollView, StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import StudentItem from '../components/StudentItem'
import TypeDD from '../components/TypeDD'
import { appColor } from '../../../../constants/appClor'

const DanhSachDiemDanh = () => {
  const [hidenIcon, setHidenIcon] = useState('');

  return (
    <View style = {styles.container}>
        <ScrollView>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='d'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='v'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='t'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='v'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='d'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='d'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='t'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='v'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='t'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='d'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='d'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='t'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='t'/>} backGround/>
          <StudentItem name='Hà Thái Khánh' mssv='49.01.104.087' icon= {<TypeDD type='v'/>} backGround/>
        </ScrollView>
    </View>
  )
}

export default DanhSachDiemDanh
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: appColor.white,
    },
})