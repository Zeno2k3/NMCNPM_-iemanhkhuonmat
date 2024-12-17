import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { HeaderComponent } from '../../../components';
import ClassItem from './components/ClassItem';
import { appColor } from '../../../constants/appClor';


const ListClassScreen = ({navigation}: any) => {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderTopWidth: 0,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    };
  }, [navigation]);
  return (
    <>
      <HeaderComponent title='Danh sách lớp học' back onPrees={()=> navigation.goBack()}/>
        
        <View style = {styles.container}>
          <ScrollView showsVerticalScrollIndicator = {false}>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {navigation.navigate('MainMHScreen')}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            <ClassItem name={'Nhập môn công nghê phần mềm'} phong={'B.214'} thu={'2'} gio={'12:30 - 16:30'} soluong={50} onPress={() => {}}/>
            </ScrollView>
        </View>
    </>
  )
}
export default ListClassScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: appColor.white,
    },
})