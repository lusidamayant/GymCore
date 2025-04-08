import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { colors } from '../../assets/theme';
import { TFontSize } from '../../assets/TStyle';

const AppBar = ({ title }) => {
  return (
    <>
      <View style={styles.appBar}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: colors.primary,
    height: Platform.OS === 'ios' ? 90 : 56,
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
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    color: colors.textPrimary,
    fontSize: TFontSize.lg,
    fontWeight: 'bold',
  },
});

export default AppBar;