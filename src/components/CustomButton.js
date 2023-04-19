import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Dimension from '../constants/Dimension';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Font from "../constants/Font";

export default function CustomButton({ title, onPress, customStyle = {} }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        padding: Spacing * 2
    },
    button: {
        justifyContent: 'center',
        width: Dimension.width - 25,
        height: 60,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: Spacing,
        fontSize: FontSize.medium,
        fontFamily: Font["poppins-regular"]
    },
    buttonTitle: {
        textAlign: 'center',
        color: Colors.onPrimary,
        fontSize: FontSize.medium,
        fontFamily: Font["poppins-semiBold"]
    }
})