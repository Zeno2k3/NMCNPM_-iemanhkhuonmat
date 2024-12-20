import React from 'react'
import { StyleSheet, View } from 'react-native'
import { globalStyles } from '../../../styles/globalStyles'
import { SpaceComponent, TextComponent } from '../../../components'
import { appColor } from '../../../constants/appClor'
import { fontFamilies } from '../../../constants/appfontFamilies'

interface Props {
    name: string,
    vang: number,
    tre: number,
}

const ItemMonHoc = (props: Props) => {
    const {name, vang, tre} = props
  return (
     <View style = {[globalStyles.button, {backgroundColor: appColor.white, alignItems: 'flex-start', paddingHorizontal: 10, margin: 10}]}>
        <TextComponent text={name} font={fontFamilies.bold}/>
        <View style = {styles.row}>
            <TextComponent text = {`Vắng: ${vang}`}></TextComponent>
            <TextComponent text = {`Trễ: ${tre}`}></TextComponent>
        </View>
     </View>
  )
}

export default ItemMonHoc

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '90%',
    }
})