import React from 'react'
import { ButtonSelect, HeaderComponent } from '../../components'
import { LichSu } from '../../assets/svg'
import { StyleSheet, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { appColor } from '../../constants/appClor'

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
  }
})