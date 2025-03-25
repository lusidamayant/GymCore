import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as RNStatusBar, Platform, Appearance, ScrollView, Image, Dimensions } from 'react-native';
import { colors, fontType } from './assets/theme';
import { TPadding, TRadius, TFontSize, TMargin, TFontWeight } from './assets/TStyle';
import { SearchNormal, Notification, Home2, User, DiscountShape, TransactionMinus, LocationDiscover, Discover, Notepad2, ArrowRight, Heart } from 'iconsax-react-native';
import { useState } from 'react';
import Navbar from './src/components/Navbar';
import Card from './src/components/Card';

const gymLists = [
  {
    id: 1,
    title: "Gym Core Malang (10 Km)",
    img: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/04/one-eighty.webp"
  },
  {
    id: 2,
    title: "Gym Core Surabaya (80 Km)",
    img: "https://malangraya.blok-a.com/wp-content/uploads/sites/5/2024/03/WhatsApp-Image-2024-03-07-at-19.46.57-1.jpeg"
  },
  {
    id: 3,
    title: "Gym Core Jakarta (220 Km)",
    img: "https://smartlegal.id/wp-content/uploads/bb-plugin/cache/usaha-gym-jpg-landscape.webp"
  },
];

const newsList = [
  {
    id: 1,
    title: "What is Gym?",
    img: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2023/08/4-Reasons-to-Keep-Going-to-the-Gym-During-an-Outbreak-happy-people-equipment.jpg"
  },
  {
    id: 2,
    title: "How to Gym properly",
    img: "https://www.healthandfitness.org/uploads/Articles/Column-Width/_1200x630_crop_center-center_82_none/industry-news_muscular-bicep-dumbbell-stock_column.jpg?mtime=1556896023"
  },
  {
    id: 3,
    title: "Is steroid legal?",
    img: "https://images.theconversation.com/files/638421/original/file-20241213-15-qycm4c.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
  },
];

export default function App() {
  Appearance.setColorScheme('light');

  return (
    <View style={styles.container}>
      {/* Atur warna status bar */}
      <StatusBar style="light" backgroundColor={colors.primary} />

      {/* NAVBAR SECTION */}
      <Navbar />

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
          <Text style={[content.text, { fontSize: TFontSize.xl, fontWeight: TFontWeight.bold }]}>Nearby Gym Core</Text>
          <Text style={{ color: colors.primary }}>See More</Text>
        </View>

        <ScrollView style={{ paddingLeft: TPadding.md }} horizontal showsHorizontalScrollIndicator={false}>
          {gymLists.map((el, i) => (
            <Card key={i} id={i} imageSrc={el.img} caption={el.title} />
          ))}
        </ScrollView>


        {/* NEWS SECTION */}
        <View style={content.container}>
          <Text style={[content.text, { fontSize: TFontSize.xl, fontWeight: TFontWeight.bold }]}>News</Text>
          <Text style={{ color: colors.primary }}>See More</Text>
        </View>

        <ScrollView style={{ paddingLeft: TPadding.md }} horizontal showsHorizontalScrollIndicator={false}>
          {newsList.map((el, i) => <Card key={i} id={i} imageSrc={el.img} caption={el.title} />)}
        </ScrollView>

        <View style={{ height: 100 }}>

        </View>
      </ScrollView>

      {/* BOTTOM NAV SECTION */}
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary
  }
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
    fontSize: TFontSize.sm,
    color: colors.textPrimary
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
    color: colors.textSecondary,
    fontFamily: fontType.bold,
  }
});