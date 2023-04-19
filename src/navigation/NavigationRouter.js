import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setAuthentication } from "../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getValueFor } from "../utility/utility";
import Color from "../constants/Color";
// AUTH SCREENS
import { Wellcome, Login, Register } from '../screens/auth'
// STACK SCREENS
import { Home } from "../screens/stack";

const Stack = createNativeStackNavigator();

function NavigationRouter() {

    const dispatch    = useDispatch();
    const [loginCheck, setLoginCheck] = useState(true);
    const isAuthToken = useSelector((state) => state.auth.userToken);
    //console.log(isAuthToken)

    useEffect(() => {
        async function getUserToken() {
            let result = await getValueFor("userToken");
            dispatch(setAuthentication(result));
            setLoginCheck(false)
        }
        
        getUserToken();
    }, [])

    if (loginCheck) {
        return null;
    }

    return (
        isAuthToken ? (
            <Stack.Navigator screenOptions={{headerShown: true, headerStyle: { backgroundColor: Color.primary }, headerTintColor: Color.onPrimary}}>
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="wellcome" component={Wellcome} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
            </Stack.Navigator>
        )
    );
}

export default NavigationRouter;
