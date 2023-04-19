import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { clear } from '../../utility/utility'
import { logout } from '../../redux/slice/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../../components'

export default function Home() {

  const dispatch = useDispatch();

  const logoutClicked = () => {
    //alert("logout")
    clear("userToken");
    dispatch(logout());
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Home</Text>
      <CustomButton title="Logout" customStyle={{backgroundColor: 'red', borderColor: 'red', width: 150}} onPress={logoutClicked}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})