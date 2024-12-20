import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React, { ReactNode } from 'react'
import { appInfos } from '../constants/appInfos'
import { appColor } from '../constants/appClor'
import SpaceComponent from './SpaceComponent'
import TextComponent from './TextComponent'
import { ArrowLeft } from 'iconsax-react-native'

interface Props {
    icon?: ReactNode,
    title: string
    back?: boolean
    onPrees ?: () => void
}

const HeaderComponent = (props: Props) => {
    const {icon, title, back, onPrees} = props
    return (
        <>
        <View style={styles.header}>
                <View style = {styles.headerrow}>
                    <SpaceComponent width={30}/>
                    {
                        back ? <TouchableOpacity onPress={onPrees}>{<ArrowLeft/>}</TouchableOpacity> : icon
                    }
                    <SpaceComponent width={10}/>
                    <TextComponent text = {title} title 
                    styles={{fontSize: 20}}/>
                </View>    
        </View>
        </>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header:{
        width: appInfos.size.WIDTH,
        height: 80,
        backgroundColor: appColor.gray2,
        elevation: 20,
        paddingTop: 30,   
    },
    headerrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})