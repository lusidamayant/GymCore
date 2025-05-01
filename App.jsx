import { Appearance, Platform, StatusBar, StyleSheet, View } from "react-native";
import Profile from "./src/screens/Profile";
import { colors } from "./assets/theme";
import Home from "./src/screens/Home";
import News from "./src/screens/News";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  Appearance.setColorScheme('light');

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Atur warna status bar */}
        <StatusBar style="light" backgroundColor={colors.primary} />
        <Home />
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.base,
      top: 0,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Hindari overlap di Android
  },
  text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.textPrimary
  }
});