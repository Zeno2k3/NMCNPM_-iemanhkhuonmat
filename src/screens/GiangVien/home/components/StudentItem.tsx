import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appInfos } from '../../../../constants/appInfos';
import { appColor } from '../../../../constants/appClor';
import { TextComponent } from '../../../../components';
import { fontFamilies } from '../../../../constants/appfontFamilies';

interface Props {
    name: string;
    mssv: string;
}

const StudentItem = (props: Props) => {
    const {name, mssv} = props
  return (
    <View style = {styles.container}>
       <TextComponent text={`Họ và Tên : ${name}`} font={fontFamilies.bold}/>
       <TextComponent text={`MSSV : ${mssv}`}/>
    </View>
  )
}

export default StudentItem

const styles = StyleSheet.create({
  container: {
    width: appInfos.size.WIDTH * 0.9,
    backgroundColor: appColor.gray2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 15
  }
})