import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, { StyleHTMLAttributes } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilies } from '../constants/appfontFamilies'
import { appColor } from '../constants/appClor'

interface Props {
    text: string
    color?: string
    styles?: StyleProp<TextStyle>
    size?: number
    font?: string
    title ?: boolean
}

const TextComponent = (props: Props) => {
    const { text, color, styles, size, font, title } = props
    return (
        <Text
            style={
                [
                    globalStyles.text,
                    {
                        color: color ?? appColor.black,
                        fontSize: size ?? title ? 26 : 14,
                        fontFamily: font ? font : title ? fontFamilies.medium : fontFamilies.regular
                    },
                    styles
                ]
            }>{text}</Text>
    )
}


export default TextComponent