import React from 'react'
import { ButtonSelect, HeaderComponent, SpaceComponent } from '../../components'
import { LichSu } from '../../assets/svg'
import { ScrollView, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { appColor } from '../../constants/appClor'
import ItemMonHoc from './components/ItemMonHoc'

const LichSuScreen = () => {
  const data_namhoc = [
    {id: '1', name: '2024 - 2025'},
    {id: '2', name: '2023 - 2025'},
    {id: '3', name: '2022 - 2025'},
    {id: '4', name: '2021 - 2025'},
    {id: '5', name: '2020 - 2025'},
  ]

  const data_hocki = [
    {id: '1', name: 'Học kì 1'},
    {id: '2', name: 'Học kì 2'},
    {id: '3', name: 'Học Kì hè'},
  ]
  return (
   <>
    <HeaderComponent title={'Lịch sử điểm danh'} icon= {<LichSu/>} />
    <View style ={[globalStyles.container,{backgroundColor: appColor.gray}]}>
        <View style = {[styles.children,]}>
            <ButtonSelect name={"Năm học"} list={data_namhoc}/>
            <ButtonSelect name={"Học Kì"} list={data_hocki}/>
        </View>
        <View style= {styles.table}>
        <ScrollView>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
          <ItemMonHoc name= {'Nhập môn công nghệ phần mền'} vang={0} tre={0}/>
        </ScrollView>
        </View>
    </View>
   </>
  )
}

export default LichSuScreen

const styles = StyleSheet.create({
  children: {
    flex: 1,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  table: {
    flex: 9,
    alignItems: 'center',
    position: 'relative',
  }
})