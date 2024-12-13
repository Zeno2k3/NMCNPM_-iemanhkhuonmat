import { TouchableOpacity, StyleProp, ViewStyle, TextStyle, } from 'react-native'

import React, { ReactNode } from 'react'
import { appColor } from '../constants/appClor';
import { globalStyles } from '../styles/globalStyles';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/appfontFamilies';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary'|'link'
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textFont?: string
    textColor?: string;
    textStyles?: StyleProp<TextStyle>;
    onPress?: () => void;
}

const ButtonComponent = (props: Props) => {
  const {icon, text, type, color, styles,textColor, textFont, textStyles, onPress} = props 
  return (
    type === 'primary' ? (
      <TouchableOpacity
          onPress={onPress}
          style={[
              globalStyles.button,
              {
                  backgroundColor: color ?? appColor.pimary,
                  marginBottom: 20
              },
              styles,
          ]}>
          {icon && icon}
          <TextComponent text = {text}
              color={textColor ?? appColor.white}
              styles={[
                  textStyles,
                  { 
                      marginLeft: icon ? 12 : 0, 
                      fontSize: 16
                  }
              ]}
              font={ textFont ?? fontFamilies.medium}
          />
          {icon && icon}
      </TouchableOpacity>
      )
      : <TouchableOpacity
          onPress={onPress}>
          <TextComponent text = {text}/>
      </TouchableOpacity>
  )
}

export default ButtonComponent