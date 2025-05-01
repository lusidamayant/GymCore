import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { colors } from "../../assets/theme";
import { TFontSize } from "../../assets/TStyle";
import { Discover, Home2, Notepad2, User } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import News from "../screens/News";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomBar = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarActiveTintColor: colors.danger,
        tabBarInactiveTintColor: colors.textPrimary,
        tabBarLabelStyle: styles.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Home2 
              color={color} 
              size={26} 
              variant={focused ? 'Bold' : 'Linear'} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={''}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Discover 
              color={color} 
              size={26} 
              variant={focused ? 'Bold' : 'Linear'} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Notepad2 
              color={color} 
              size={26} 
              variant={focused ? 'Bold' : 'Linear'} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <User 
              color={color} 
              size={26} 
              variant={focused ? 'Bold' : 'Linear'} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: colors.primary,
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 2,
    alignItems: 'center'
  },
  item: {
    gap: 2,
    alignItems: 'center'
  },
  text: {
    fontSize: TFontSize.sm,
    color: colors.textPrimary
  }
});

export default BottomBar;