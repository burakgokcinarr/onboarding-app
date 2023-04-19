import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
const backImage = require('../../../assets/images/welcome-img.png');
const backImage2 = require('../../../assets/images/backImage2.webp');
import Dimension from '../../constants/Dimension';
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Color";
import Font from "../../constants/Font";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function Wellcome() {

  const navigate = useNavigation();

  return (
    <SafeAreaView>
      <Image source={backImage2} style={styles.backImage} contentFit='cover' transition={2500}/>
      <View style={styles.appInfo}>
          <Text style={styles.bigTitle}>
            Discover Your Dream Job here
          </Text>
          <Text style={styles.smallTitle}>
            Explore all the existing job roles based or your interest and study
            major
          </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigate.navigate('login')} >
          <Text style={styles.loginTitle}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButtonContainer} onPress={() => navigate.navigate("register")} >
          <Text
            style={styles.registerTitle}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backImage: {
    //flex: 1,
    height: Dimension.height / 2.5
  },
  appInfo: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  bigTitle: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  smallTitle: {
    fontSize: FontSize.small,
    color: Colors.background,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  container: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  loginButtonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "45%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  loginTitle: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  registerButtonContainer: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "45%",
    borderRadius: Spacing,
    borderColor: Colors.primary,
    borderWidth: 1
  },
  registerTitle: {
    fontFamily: Font["poppins-bold"],
    color: Colors.background,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});
