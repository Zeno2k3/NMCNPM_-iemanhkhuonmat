import { StyleSheet } from "react-native";
import { appColor } from "../constants/appClor";
import { fontFamilies } from "../constants/appfontFamilies";
import { appInfos } from "../constants/appInfos";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.white
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: appInfos.size.WIDTH* 0.8,
        height: appInfos.size.HEIGHT * 0.065,
        borderRadius: 13,
        elevation: 12
    },
    text: {
        color: appColor.black,
        fontSize: 16,
        fontFamily: fontFamilies.regular
    },
    shardow: {

    },

    row: {
        width: appInfos.size.WIDTH * 0.5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})