import React from 'react'
import { ButtonSelect, HeaderComponent } from '../../components'
import { ThongKe } from '../../assets/svg'
import { StyleSheet, View } from 'react-native'
import { appColor } from '../../constants/appClor'

const ThongKeScreen = () => {
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
      <HeaderComponent title={'Thống Kê'} icon = {<ThongKe/>} />
      <View style = {{backgroundColor: appColor.gray2}}>
      <View style = {[styles.children,]}>
            <ButtonSelect name={"Năm học"} list={data_namhoc}/>
            <ButtonSelect name={"Học Kì"} list={data_hocki}/>
        </View>
      </View>
    </>
  )
}

export default ThongKeScreen

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