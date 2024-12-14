import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { appColor } from '../../../constants/appClor'
import { appInfos } from '../../../constants/appInfos'
import { SpaceComponent, TextComponent } from '../../../components'
import { LogoHeader, LogoQuanly } from '../../../assets/svg'
import { fontFamilies } from '../../../constants/appfontFamilies'

const HomeGVScreen = ({navigation}: any) => {
  return (
    <>
      <View style={styles.header}>
        <SpaceComponent width={20} />
        <LogoHeader />
        <SpaceComponent width={10} />
        <TextComponent text='Hi teacher' title styles={{ fontSize: 20, fontFamily: fontFamilies.regular }} />
      </View>
      <View style={styles.headerConten}>
        <TextComponent text='Các chức năng' title />
        <TextComponent text='Tất cả' title styles={{ fontSize: 16, fontFamily: fontFamilies.regular }} />
      </View>
      <View style={styles.conten}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ListClassScreen')}
          >
          <LogoQuanly/>
          <TextComponent text='Xem Lớp'/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HomeGVScreen

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    backgroundColor: appColor.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: appInfos.size.WIDTH,
    height: 132
  },
  headerConten: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conten: {
    width: appInfos.size.WIDTH,
    height: 500,
    margin: 30
  }
})