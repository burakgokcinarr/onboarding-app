import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Color";
import { AntDesign } from '@expo/vector-icons';

export default function SocialButton({ onPress1, onPress2, onPress3, customStyle = {} }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.subContainer, customStyle]} onPress={onPress1}>
                <AntDesign name={"google"} size={20} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subContainer, customStyle]} onPress={onPress2}>
                <AntDesign name={"facebook-square"} size={20} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subContainer, customStyle]} onPress={onPress3}>
                <AntDesign name={"apple1"} size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: Spacing * 1.5,
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: Colors.gray,
        borderRadius: 5,
        margin: Spacing/2
    },
})