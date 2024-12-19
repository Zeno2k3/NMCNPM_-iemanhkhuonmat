import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { appInfos } from '../../../../constants/appInfos';
import { appColor } from '../../../../constants/appClor';
import { TextComponent } from '../../../../components';
import { fontFamilies } from '../../../../constants/appfontFamilies';

interface Props {
    name: string;
    mssv: string;
    icon?: ReactNode;
    backGround?: boolean
}

const StudentItem = (props: Props) => {
    const {name, mssv, icon, backGround} = props
  return (
    <View style = {[styles.container,  {backgroundColor: backGround ? appColor.white : appColor.gray2}]}>
      <View>
        <TextComponent text={`Họ và Tên : ${name}`} font={fontFamilies.bold}/>
        <TextComponent text={`MSSV : ${mssv}`}/>
      </View>
      {icon ?? icon}
    </View>
  )
}

export default StudentItem

const styles = StyleSheet.create({
  container: {
    width: appInfos.size.WIDTH * 0.9,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  }
})