import { View, Text } from 'react-native'
import React from 'react'
import { appColor } from '../../../../constants/appClor';
import { TextComponent } from '../../../../components';
import { fontFamilies } from '../../../../constants/appfontFamilies';


interface Props {
  type: 'd' | 'v' | 't';
}

const TypeDD = (props: Props) => {
  const {type} = props
  return (
    <View style = {{
        width: 55,
        height: 55,
        borderRadius: 100,
        elevation: 10,
        backgroundColor: type === 'd' ? appColor.xanhla : (type === 'v' ? appColor.red : appColor.blue2)
    }}>
      {type === 'd' ? 
        <View style = {{position: 'absolute', top: 5, left: 8}}>
          <TextComponent text ='Đúng giờ' styles = {{textAlign: 'center',fontFamily: fontFamilies.medium}}/>
        </View> : (type === 'v' ? 
        <View style = {{position: 'absolute', top: 13, left: 8}}>
          <TextComponent text ='Vắng' styles = {{textAlign: 'center', fontFamily: fontFamilies.medium}}/>
        </View> : <View style = {{position: 'absolute', top: 15, left: 14}}>
          <TextComponent text ='Trễ' styles = {{textAlign: 'center', fontFamily: fontFamilies.medium, fontSize: 18}}/>
        </View>
        )}
    </View>
  )
}

export default TypeDD
