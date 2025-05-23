import { Appearance, Platform, StatusBar, StyleSheet, View } from "react-native";
import Profile from "./src/screens/Profile";
import { colors } from "./assets/theme";
import Home from "./src/screens/Home";
import News from "./src/screens/News";
import { BottomBar } from "./src/components";
import { useState } from "react";
import Discover from "./src/screens/Discover";
import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import Router from "./src/navigation/Router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  Appearance.setColorScheme('dark');

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={colors.primary} />
        <Router/>
        {/* <View style={styles.container}>
        <View style={{ flex: 1, marginBottom: 70 }}>
          {renderScreen()}
        </View>
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </View> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.base,
    top: 0,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Hindari overlap di Android
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary
  }
});