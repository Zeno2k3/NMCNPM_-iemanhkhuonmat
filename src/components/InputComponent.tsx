import { KeyboardType, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { ReactNode, useState} from 'react'
import { appColor } from '../constants/appClor'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { globalStyles } from '../styles/globalStyles'

interface Props {
    value: string
    onChange: (val: string) => void
    icon_affix?: ReactNode
    icon_suffix?: ReactNode
    placeHolder?: string
    keyBoardType?: KeyboardType
    isPassWord?: boolean
    allowClear ?: boolean
    isOTP?: boolean

}
const InputComponent = (props: Props) => {

    const { value, icon_affix, icon_suffix, keyBoardType, placeHolder,isPassWord,allowClear, isOTP,  onChange } = props
    const [isShowPassWord, setIsShowPassWord] = useState(isPassWord ?? false);
    return (
        <View
            style={[styles.inputContainer,
                {
                    width: isOTP ? 80: 318,
                    height: isOTP ? 60 : 60
                }
            ]}>
            {icon_affix ?? icon_affix}
            <TextInput
                style = {[styles.inputtext, globalStyles.text]}
                keyboardType={keyBoardType ?? 'default'}
                value={value}
                placeholder={placeHolder}
                secureTextEntry = {isOTP || isShowPassWord}
                onChangeText={val => onChange(val)}
            />
            {icon_suffix ?? icon_suffix}
            <TouchableOpacity onPress={
                isPassWord ? () => setIsShowPassWord(!isShowPassWord) : () => onChange('')
            }>
                {
                    isPassWord ? (
                        <FontAwesome name = {!isShowPassWord ? 'eye' : 'eye-slash'} size={22} color={appColor.black}/>
                    ) : (value.length > 0 && allowClear && (
                        <AntDesign name='close' size={22} color={appColor.black}/>
                    ))
                }
            </TouchableOpacity>
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: appColor.gray,
        borderWidth: 1,
        borderRadius: 13,
        flexDirection: 'row'
    },
    inputtext: {
        padding: 0,
        margin: 0,
        flex: 1,
        paddingHorizontal: 14
    }
})