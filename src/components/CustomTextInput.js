import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Dimension from '../constants/Dimension';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Color";
import Font from "../constants/Font";

export default function CustomTextInput({ placeholderText, onChangeText, textValue, isSecurity = false, customStyle = {} }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholderText}
                onChangeText={onChangeText}
                placeholderTextColor={Colors.darkText}
                style={[styles.input, customStyle]}
                value={textValue}
                secureTextEntry={isSecurity}
                autoCapitalize='none'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        padding: Spacing
    },
    input: {
        width: Dimension.width - 25,
        height: 60,
        backgroundColor: Colors.gray,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: Spacing,
        fontSize: FontSize.medium,
        fontFamily: Font["poppins-regular"]
    }
})
