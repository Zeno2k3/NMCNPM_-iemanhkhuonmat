import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import StudentItem from '../components/StudentItem'
import { appColor } from '../../../../constants/appClor'
import { ButtonComponent } from '../../../../components'
import { UserTick } from 'iconsax-react-native'
import { Tich } from '../../../../assets/svg'

const DssinhvienCddScreen = () => {

  const [isDiemDanh, setIsDiemDanh] = useState(false);

  const data = [
      {id: '1', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '2', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '3', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '4', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '5', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '6', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '7', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '8', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '9', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '10', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
      {id: '11', name:'Hà Thái Khánh', mssv:'49.01.104.087'},
  ]

  return (
    <View style = {styles.container}>
        <ScrollView>
          {
            data.map((datas) => (
              <StudentItem 
                key={datas.id}
                name={datas.name}
                mssv={datas.mssv}
                icon = {isDiemDanh ? <Tich/> : <></>}
                backGround
              />
            ))
          }
          <View style = {{alignItems: 'center'}}>
            <ButtonComponent text = 'Điểm Danh Thủ Công' type='primary' onPress={()=> {setIsDiemDanh(true)}}/>
          </View>
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