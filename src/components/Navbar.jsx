import { SearchNormal } from "iconsax-react-native";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { colors, fontType } from "../../assets/theme";
import { TPadding, TRadius } from "../../assets/TStyle";

const Navbar = () => {
  return (
    <View style={navbar.container}>
      <View style={navbar.searchBox}>
        <Text style={{ color: colors.white }}>Search Gym Doorz Location</Text>
        <SearchNormal color={colors.white} size={20} />
      </View>
      {/* <View>
                <Notification color={colors.black} size={30} fill={colors.black} variant='Bold' />
            </View> */}
    </View>
  );
}

const navbar = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // height: 50,
    position: 'absolute',
    // top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 10,
    padding: TPadding.sm,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 2,
    alignItems: 'center',
    borderBottomLeftRadius: TRadius.lg,
    borderBottomRightRadius: TRadius.lg,
  },
  text: {
    color: colors.black,
    fontFamily: fontType.bold,
    fontSize: 20,
  },
  searchBox: {
    backgroundColor: colors.black,
    width: '100%',
    flexDirection: 'row',
    // height: 40,
    padding: 14,
    borderRadius: TRadius.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


export default Navbar;