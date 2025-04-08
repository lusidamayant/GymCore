import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../assets/theme";
import { TFontSize } from "../../assets/TStyle";
import { Discover, Home2, Notepad2, User } from "iconsax-react-native";

const BottomBar = () => {
  return (
    <View style={bottomNav.container}>
        <View style={bottomNav.item}>
          <Home2 color={colors.danger} size={26} variant='Bold' />
          <Text style={[bottomNav.text, { color: colors.danger }]}>Home</Text>
        </View>
        <View style={bottomNav.item}>
          <Discover color={colors.textPrimary} size={26} variant='Bold' />
          <Text style={bottomNav.text}>Explore</Text>
        </View>
        <View style={bottomNav.item}>
          <Notepad2 color={colors.textPrimary} size={26} variant='Bold' />
          <Text style={bottomNav.text}>News</Text>
        </View>
        <View style={bottomNav.item}>
          <User color={colors.textPrimary} size={26} variant='Bold' />
          <Text style={bottomNav.text}>Profile</Text>
        </View>
      </View>
  );
}

const bottomNav = StyleSheet.create({
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