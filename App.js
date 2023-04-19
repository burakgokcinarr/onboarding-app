import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import NavigationRouter from "./src/navigation/NavigationRouter";
import { useFonts } from 'expo-font';
import Font from "./src/config/Font";
import Color from "./src/constants/Color";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Color.themeBackground,
  },
};

export default function App() {

  const [isLoaded] = useFonts(Font);
  
  if (!isLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <NavigationRouter />
      </NavigationContainer>
    </Provider>
  );
}
