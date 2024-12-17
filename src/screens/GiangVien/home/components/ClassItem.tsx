import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { appInfos } from '../../../../constants/appInfos';
import { appColor } from '../../../../constants/appClor';
import { TextComponent } from '../../../../components';
import { fontFamilies } from '../../../../constants/appfontFamilies';
import { Edit } from 'iconsax-react-native';
import { globalStyles } from '../../../../styles/globalStyles';

interface Props {
    name: string;
    phong: string;
    thu: string;
    gio: string;
    soluong: number;
    onPress: () => void;
}

const ClassItem = (props: Props) => {
  const {name, phong, thu, gio, soluong,onPress } = props
  return (
    <View
      style = {[styles.container, globalStyles.shadow
      ]}>
        <View>
          <TextComponent text={name} styles = {{
            fontFamily: fontFamilies.bold
          }}/>
          <TextComponent text= {`${phong} | Thứ ${thu}  ${gio}`}/>
          <TextComponent text={`${soluong} sinh vien`}/>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Edit/>
        </TouchableOpacity>
    </View>
  )
}

export default ClassItem

const styles = StyleSheet.create({
  container: {
    width: appInfos.size.WIDTH * 0.9,
    backgroundColor: appColor.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})