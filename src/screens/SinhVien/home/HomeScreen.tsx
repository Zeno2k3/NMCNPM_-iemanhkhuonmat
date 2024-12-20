import {View} from 'react-native';
import React from 'react';
import {ButtonComponent, SpaceComponent, TextComponent} from '../../../components';
import {fontFamilies} from '../../../constants/appfontFamilies';
import {globalStyles} from '../../../styles/globalStyles';
import {LogoProfileGV} from '../../../assets/svg';
import { appInfos } from '../../../constants/appInfos';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container, {alignItems: 'center'}]}>
      <SpaceComponent height={100} />
      <LogoProfileGV />
      <SpaceComponent height={10} />
      <TextComponent
        text="Hi Friend"
        styles={{
          fontFamily: fontFamilies.medium,
          fontSize: 24,
        }}
      />
      <SpaceComponent height={60} />
      <View style={[globalStyles.row]}>
        <TextComponent text="Họ và Tên :   " />
        <TextComponent text="Teacher name" />
      </View>
      <View style={[globalStyles.row]}>
        <TextComponent text="Ngày sinh :   " />
        <TextComponent text="dd/mm/yyyy" />
      </View>
      <View style={[globalStyles.row]}>
        <TextComponent text="MSSV :  " />
        <TextComponent text="192.168.1.140" />
      </View>
      <SpaceComponent height={appInfos.size.HEIGHT * 0.3}/>
      <ButtonComponent text='Cập nhật khuôn mặt' type='primary' onPress={() => {navigation.navigate('UpDateFaceScreen')}}/>
    </View>
  );
};

export default HomeScreen;
