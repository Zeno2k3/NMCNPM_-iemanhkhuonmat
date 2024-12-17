import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeaderComponent, SpaceComponent, TextComponent } from '../../../../components'
import { appColor } from '../../../../constants/appClor'
import { DSSV } from '../../../../assets/svg'
import { UserTag, UserTick } from 'iconsax-react-native'

const MainMHScreen = ({navigation}: any) => {
  return (
    <>
      <HeaderComponent title='Nhập Môn Công Nghệ Phần Mềm' back onPrees={() => navigation.goBack()}/>
      <View style = {styles.container}>
        <View style = {styles.children}>
          <TextComponent text='Thông tin:' title/>
          <SpaceComponent height={10}/>
          <View style = {styles.row}>
            <TextComponent text='Phòng học'/>
            <SpaceComponent width={30}/>
            <View style = {styles.text}>
              <TextComponent text='B.214'/>
            </View>
          </View>
          <SpaceComponent height={30}/>
          <View style = {styles.row}>
            <TextComponent text='Thời gian'/>
            <SpaceComponent width={40}/>
            <View style = {styles.text}>
              <TextComponent text='Thứ 2'/>
            </View>
          </View>
          <SpaceComponent height={30}/>
          <View style = {styles.row}>
            <TextComponent text='Giờ học'/>
            <SpaceComponent width={50}/>
            <View style = {styles.text}>
              <TextComponent text='12:30 - 16:40'/>
            </View>
          </View>
          <SpaceComponent height={30}/>
          <View style = {styles.row}>
            <TextComponent text='Số lượng sinh viên'/>
            <SpaceComponent width={30}/>
            <View style = {styles.text}>
              <TextComponent text='50'/>
            </View>
          </View>       
        </View>
        <SpaceComponent height={30}/>
        <View style = {[styles.children]}> 
        <TextComponent text='Chức Năng:' title/>
        <SpaceComponent height={30}/>
        <View style = {[styles.row,{width: "100%", justifyContent: 'space-around'}]}>
          <TouchableOpacity onPress={() => navigation.navigate('DSSV')}>
              <UserTag size={40}/>
              <TextComponent text='DSSV'/>
          </TouchableOpacity>
          <TouchableOpacity style = {{alignItems: 'center'}} onPress={() => navigation.navigate('DiemDanhScreen')}>
            <UserTick size={35}/>
            <TextComponent text='Điểm Danh'/>
          </TouchableOpacity>
        </View>
      </View>
      </View>
     
    </>
  )
}

export default MainMHScreen


const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 30,
      backgroundColor: appColor.gray
    },
    children: {
      flex: 1,
      padding: 20,
      backgroundColor: appColor.white,
      borderRadius: 10,
      elevation: 10
      
    },
    text:{
      backgroundColor: appColor.pink,
      paddingHorizontal: 20,
      paddingVertical: 6,
      alignItems: 'center',
      borderEndEndRadius: 10,
      borderTopEndRadius: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    }
})