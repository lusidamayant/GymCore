import { Button, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomBar from "../../components/BottomBar";
import { AppBar, Card, PageWrapper, ProfileItem, SearchInput, TButton } from "../../components";
import { colors } from "../../../assets/theme";
import { newsList, ProfileData } from "../../data";
import { TFontSize, TRadius } from "../../../assets/TStyle";
import { ArrowCircleRight, ArrowRight, ArrowRight2, ArrowRight3, DirectRight, Edit, Edit2, Lock, Logout, Mobile, SearchNormal } from "iconsax-react-native";
import { useState } from "react";
import Fab from "../../components/Fab";
import { useNavigation } from "@react-navigation/native";

export default function News() {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const filteredNews = newsList.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <PageWrapper>
            <AppBar title="News" />
            <ScrollView style={{ padding: 10, marginTop: 6, position: 'relative' }} showsVerticalScrollIndicator={false}>
                <SearchInput value={search} onChangeText={setSearch} />

                {/* 📰 News List */}
                {filteredNews.map((el, i) => (
                    <View
                        key={i}
                        style={{
                            marginBottom: 16
                        }}
                    >
                        <Card id={i} imageSrc={el.img} caption={el.title} />
                    </View>
                ))}
                <View style={{ height: 70 }}></View>
            </ScrollView>

            {/* 📱 Bottom Navigation */}
            {/* <BottomBar /> */}
            <Fab onPress={() => navigation.navigate('CreateNews')}/>
        </PageWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        display: 'flex',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 80, // Sesuaikan dengan tinggi bottom bar
        backgroundColor: colors.secondary,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 20
    },
});
