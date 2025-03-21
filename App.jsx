import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as RNStatusBar, Platform, Appearance, ScrollView, Image, Dimensions } from 'react-native';
import { colors, fontType } from './assets/theme';
import { TPadding, TRadius, TFontSize, TMargin, TFontWeight } from './assets/TStyle';
import { SearchNormal, Notification, Home2, User, DiscountShape, TransactionMinus, LocationDiscover, Discover, Notepad2, ArrowRight } from 'iconsax-react-native';

export default function App() {
  Appearance.setColorScheme('light');

  return (
    <View style={styles.container}>
      {/* Atur warna status bar */}
      <StatusBar style="light" backgroundColor={colors.primary} />
      
      {/* NAVBAR SECTION */}
      <View style={navbar.container}>
        <View style={navbar.searchBox}>
          <Text style={{color: colors.white}}>Search Gym Doorz Location</Text>
          <SearchNormal color={colors.white} size={20} />
        </View>
        {/* <View>
          <Notification color={colors.black} size={30} fill={colors.black} variant='Bold' />
        </View> */}
      </View>

      <ScrollView>
        {/* CAROUSEL SECTION */}
        <View style={carousel.container}>
          <ScrollView 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}
            style={{ width: '100%', height: 280 }}
          >
            <Image 
              source={{ uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1623207171/attached_image/memaksimalisasi-manfaat-fitness-di-gym.jpg' }} 
              style={carousel.image} 
            />
            <Image 
              source={{ uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1623207171/attached_image/memaksimalisasi-manfaat-fitness-di-gym.jpg' }} 
              style={carousel.image} 
            />
            <Image 
              source={{ uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1623207171/attached_image/memaksimalisasi-manfaat-fitness-di-gym.jpg' }} 
              style={carousel.image} 
            />
          </ScrollView>
        </View>

        <View style={content.container}>
          <Text style={[content.text, {fontSize: TFontSize.xl, fontWeight: TFontWeight.bold}]}>Nearby Gym Doorz</Text>
          <Text style={{color: colors.primary}}>See More</Text>
        </View>

        <ScrollView style={{ paddingLeft: TPadding.md }} horizontal showsHorizontalScrollIndicator={false}>
          <View key="1" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A (10 Km)</Text>
              {/* <Text style={styles.text}></Text> */}
              <ArrowRight color={colors.black} size={22} />
            </View>
          </View>
          <View key="2" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A</Text>
              <Text style={styles.text}>(10 Km)</Text>
            </View>
          </View>
          <View key="3" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A</Text>
              <Text style={styles.text}>(10 Km)</Text>
            </View>
          </View>
        </ScrollView>

        {/* NEWS SECTION */}

        <View style={content.container}>
          <Text style={[content.text, {fontSize: TFontSize.xl, fontWeight: TFontWeight.bold}]}>News</Text>
          <Text style={{color: colors.primary}}>See More</Text>
        </View>

        <ScrollView style={{ paddingLeft: TPadding.md }} horizontal showsHorizontalScrollIndicator={false}>
          <View key="1" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A (10 Km)</Text>
              {/* <Text style={styles.text}></Text> */}
              <ArrowRight color={colors.black} size={22} />
            </View>
          </View>
          <View key="2" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A</Text>
              <Text style={styles.text}>(10 Km)</Text>
            </View>
          </View>
          <View key="3" style={styles.card}>
            <Image source={{ uri: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp" }} style={styles.image} />
            <View style={styles.label}>
              <Text style={styles.text}>Gym Doorz A</Text>
              <Text style={styles.text}>(10 Km)</Text>
            </View>
          </View>
        </ScrollView>

        <View style={{height: 100}}>

        </View>
      </ScrollView>

      {/* BOTTOM NAV SECTION */}
      <View style={bottomNav.container}>
        <View style={bottomNav.item}>
          <Home2 color={colors.danger} size={26} variant='Bold'/>
          <Text style={[bottomNav.text, { color: colors.danger }]}>Home</Text>
        </View>
        <View style={bottomNav.item}>
          <Discover color={colors.black} size={26} variant='Bold'/>
          <Text style={bottomNav.text}>Explore</Text>
        </View>
        <View style={bottomNav.item}>
          <Notepad2 color={colors.black} size={26} variant='Bold'/>
          <Text style={bottomNav.text}>News</Text>
        </View>
        <View style={bottomNav.item}>
          <User color={colors.black} size={26} variant='Bold'/>
          <Text style={bottomNav.text}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.base,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0, // Hindari overlap di Android
  },
  card: {
    width: Dimensions.get('window').width - 20,
    height: 200,
    borderRadius: TRadius.md,
    // backgroundColor: '#fff',
    marginRight: 10,
    // elevation: 3, // Shadow effect
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    filter: 'brightness(0.6)',
    resizeMode: 'cover',
  },
  label: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: TPadding.sm,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const navbar = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // height: 50,
    position: 'absolute',
    top: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
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
    fontSize: TFontSize.sm
  }
});

const carousel = StyleSheet.create({
  container: {
    // position: 'absolute',
    // zIndex: 1,
    backgroundColor: colors.white,
    width: '100%',
    height: 300,
  },
  image: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    filter: 'brightness(0.5)'
  }
});

const content = StyleSheet.create({
  container: {
    padding: TPadding.md,
    backgroundColor: colors.base,
    color: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontFamily: fontType.bold,
  }
});