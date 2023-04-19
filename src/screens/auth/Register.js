import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Dimension from '../../constants/Dimension';
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Color";
import Font from "../../constants/Font";
import { useNavigation } from '@react-navigation/native';
import { CustomTextInput, CustomButton, SocialButton } from '../../components';

export default function Register() {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clickSingUp = () => {
    alert("Email = " + email + " Password = " + password);
  }

  const googleBtnClicked = () => {
    alert("is google")
  }

  const facebookBtnClicked = () => {
    alert("is facebook")
  }

  const appleBtnClicked = () => {
    alert("is apple")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Create an account you can explore alt the existing jobs</Text>
      <CustomTextInput placeholderText="Email" onChangeText={setEmail} textValue={email} customStyle={{marginTop: Spacing * 2}}/>
      <CustomTextInput placeholderText="Password" onChangeText={setPassword} textValue={password}/>
      <CustomTextInput placeholderText="Confirm Password" onChangeText={setConfirmPassword} textValue={confirmPassword}/>
      <CustomButton title="Sing Up" onPress={() => clickSingUp()} />
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.subTitle}>Already have a account</Text>
      </TouchableOpacity>
      <Text style={styles.orTitle}>Or continue with</Text>
      <SocialButton onPress1={() => googleBtnClicked()} onPress2={() => facebookBtnClicked()} onPress3={() => appleBtnClicked()}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: FontSize.xxLarge,
    marginTop: Spacing,
    fontFamily: Font['poppins-bold']
  },
  subTitle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: Colors.background,
    fontSize: FontSize.medium,
    marginTop: Spacing,
    fontFamily: Font['poppins-regular']
  },
  orTitle: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: FontSize.small,
    marginTop: Spacing * 2,
    fontFamily: Font['poppins-regular']
  }
})