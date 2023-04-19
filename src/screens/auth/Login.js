import { View, Text, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Dimension from '../../constants/Dimension';
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Color";
import Font from "../../constants/Font";
import { CustomTextInput, CustomButton, SocialButton } from '../../components';
import { useNavigation } from '@react-navigation/native';
//Redux
import { setAuthentication } from '../../redux/slice/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../../utility/utility';

const DEFAULT_USER_LOGIN_EMAIL    = "burak@gmail.com";
const DEFAULT_USER_LOGIN_PASSWORD = 1234;
const DEFAULT_USER_TOKEN          = "63637898-909b-43ce-b110-a5e00c4c155a";

export default function Login() {

  const dispatch                = useDispatch();
  const navigation              = useNavigation();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const singInClicked = () => {
    //Alert.alert("Hi!", email + " " + password)
    if ((email == DEFAULT_USER_LOGIN_EMAIL) && (password == DEFAULT_USER_LOGIN_PASSWORD) ) {
        save("userToken", DEFAULT_USER_TOKEN);
        dispatch(setAuthentication(DEFAULT_USER_TOKEN));
        //navigation.navigate("home");
    } else {
      Alert.alert("Error", "User not found");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Wellcome back you've been missed!</Text>
      <CustomTextInput placeholderText={"Email"} onChangeText={setEmail} textValue={email}/>
      <CustomTextInput placeholderText={"Password"} onChangeText={setPassword} textValue={password}/>
      <TouchableOpacity onPress={() => alert("forgot password")}>
        <Text style={styles.forgotText}>Forgot yout password?</Text>
      </TouchableOpacity>
      <CustomButton title="Sing In" onPress={() => singInClicked()}/>
      <TouchableOpacity onPress={() => navigation.navigate('register')}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>
      <View style={styles.social}>
        <Text style={styles.socialText}>Or continue with</Text>
        <View style={{flexDirection: 'row'}}>
          <SocialButton/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: FontSize.xxLarge,
    marginTop: Spacing * 3,
    fontFamily: Font['poppins-bold']
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    marginTop: Spacing,
    fontFamily: Font['poppins-bold']
  },
  forgotText: {
    //textAlign: 'right',
    alignSelf: 'flex-end',
    color: Colors.primary,
    fontSize: FontSize.small,
    margin: Spacing / 1.5,
    fontFamily: Font['poppins-bold'],
  },
  createAccount: {
    textAlign: 'center',
    color: Colors.onPrimary,
    fontSize: FontSize.small,
    fontFamily: Font['poppins-regular'],
    textDecorationLine: 'underline'
  },
  social: {
    alignSelf: 'center',
    //position: 'absolute',
    //bottom: Spacing * 10,
    margin: Spacing * 2
  },
  socialText: {
    textAlign: 'center',
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
    fontFamily: Font['poppins-regular']
  },
})