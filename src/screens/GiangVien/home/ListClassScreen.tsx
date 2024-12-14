import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { HeaderComponent } from '../../../components';

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
    </>
  )
}
export default ListClassScreen