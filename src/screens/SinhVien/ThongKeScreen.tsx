import React from 'react'
import { ButtonSelect, HeaderComponent } from '../../components'
import { ThongKe } from '../../assets/svg'
import { processColor, StyleSheet, View } from 'react-native'
import { appColor } from '../../constants/appClor'
import {BarChart} from 'react-native-charts-wrapper'
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
      <View style = {{backgroundColor: appColor.gray, flex: 1}}>
        <View style = {[styles.children,]}>
            <ButtonSelect name={"Năm học"} list={data_namhoc}/>
            <ButtonSelect name={"Học Kì"} list={data_hocki}/>
        </View>
      </View>
      <View style={{flex: 3}}>
        <View style={styles.container}>
        <BarChart
        style={styles.chart}
        data={{
          dataSets: [
            {
              label: "Đúng giờ",
              values: [10, 20, 30],
              config: {
                color: processColor(appColor.xanhla), // Màu của cột
              },
            },
            {
              label: "Vắng",
              values: [15, 25, 35],
              config: {
                color:processColor(appColor.red) , // Màu của cột
              },
            },
            {
              label: "Trễ",
              values: [20, 20, 10],
              config: {
                color: processColor(appColor.blue2), // Màu của cột
              },
            },
          ],
          config: {
            barWidth: 0.1, // Chiều rộng của mỗi cột
            group: {
              fromX: 0,
              groupSpace: 0.1, // Khoảng cách giữa các nhóm
              barSpace: 0.05,  // Khoảng cách giữa các cột trong một nhóm
            },
          },
        }}
        xAxis={{
          valueFormatter: ["10", "11", "12"],
          granularityEnabled: true,
          granularity: 1,
          position: "BOTTOM",
        }}
        yAxis={{
          left: {
            drawGridLines: true,
          },
          right: {
            enabled: false,
          },
        }}
        legend={{
          enabled: true,
          textSize: 12,
          form: "SQUARE",
          wordWrapEnabled: true,
        }}
        chartDescription={{ text: "Tháng" }}
      />
          </View>
        </View>
    </>
  )
}

export default ThongKeScreen

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5FCFF'
  },
  children: {
    flex: 2,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  table: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    width: "90%"
  },
  bieudo:{
    elevation: 10,
  },
  chart: {
    flex: 3
  }
})