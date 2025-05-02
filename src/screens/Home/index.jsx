import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as RNStatusBar, Platform, Appearance, ScrollView, Image, Dimensions } from 'react-native';
import { colors, fontType } from '../../../assets/theme';
import { TPadding, TRadius, TFontSize, TMargin, TFontWeight } from '../../../assets/TStyle';
import { SearchNormal, Notification, Home2, User, DiscountShape, TransactionMinus, LocationDiscover, Discover, Notepad2, ArrowRight, Heart } from 'iconsax-react-native';
import { useState } from 'react';
import { Navbar, Card, BottomBar, HorizontalList, PageWrapper } from '../../components';
import { gymLists, newsList } from '../../data';

export default function Home() {

    return (
        <PageWrapper>
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
                    <Text style={[content.text, { fontSize: TFontSize.lg, fontWeight: TFontWeight.bold }]}>Nearby Gym Core</Text>
                    <Text style={{ color: colors.primary }}>See More</Text>
                </View>

                
                <HorizontalList>
                    {gymLists.map((el, i) => (
                        <Card key={i} id={i} imageSrc={el.img} caption={el.title} />
                    ))}
                </HorizontalList>


                {/* NEWS SECTION */}
                <View style={content.container}>
                    <Text style={[content.text, { fontSize: TFontSize.lg, fontWeight: TFontWeight.bold }]}>News</Text>
                    <Text style={{ color: colors.primary }}>See More</Text>
                </View>

                <HorizontalList>
                    {newsList.map((el, i) => <Card key={i} id={i} imageSrc={el.img} caption={el.title} />)}
                </HorizontalList>

                <View style={{ height: 70 }}>

                </View>
            </ScrollView>

            {/* BOTTOM NAV SECTION */}
            {/* <BottomBar /> */}
        </PageWrapper>
    );
}

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