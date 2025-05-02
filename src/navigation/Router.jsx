import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Discover, Profile, News } from '../screens';
import { Home2, Discover as DiscoverIcon, Receipt21, ProfileCircle } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import CreateNews from '../screens/News/Create';
import { Platform, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: fontType.regular,
                    color: colors.textPrimary,
                },
                tabBarIconStyle: {
                    color: colors.base
                },
                tabBarInactiveTintColor: colors.textPrimary,
                tabBarActiveTintColor: colors.danger,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                headerShown={false}
                options={{
                    tabBarIcon: ({ focused, color }) => <Home2 color={color} variant={focused && 'Bold'} size={24} />,
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                headerShown={true}
                options={{
                    tabBarIcon: ({ focused, color }) => <DiscoverIcon color={color} variant={focused && 'Bold'} size={24} />,
                }}
            />
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    tabBarIcon: ({ focused, color }) => <Receipt21 color={color} variant={focused && 'Bold'} size={24} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => <ProfileCircle color={color} variant={focused && 'Bold'} size={24} />,
                }}
            />
        </Tab.Navigator>
    );
}

function MoreTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="CreateNews" component={CreateNews} options={{}} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen
                name="CreateNews"
                component={CreateNews}
                options={{ headerShown: true, headerStyle: styles.header, title: "Create News"}}
            />
        </Stack.Navigator>
    );
}

export default Router;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        height: Platform.OS === 'ios' ? 80 : 50,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        zIndex: 10,
        // position: 'absolute',
        top: 0,
        left: 0,
    },
});