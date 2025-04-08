import { Button, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomBar from "../../components/BottomBar";
import { AppBar, Card, ProfileItem, SearchInput, TButton } from "../../components";
import { colors } from "../../../assets/theme";
import { newsList, ProfileData } from "../../data";
import { TFontSize, TRadius } from "../../../assets/TStyle";
import { ArrowCircleRight, ArrowRight, ArrowRight2, ArrowRight3, DirectRight, Edit2, Lock, Logout, Mobile, SearchNormal } from "iconsax-react-native";
import { useState } from "react";

export default function News() {
    const [search, setSearch] = useState('');

    const filteredNews = newsList.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <AppBar title="News" />
            <ScrollView style={{ padding: 10, marginTop: 20 }} showsVerticalScrollIndicator={false}>
                <SearchInput value={search} onChangeText={setSearch} />

                {/* 📰 News List */}
                {filteredNews.map((el, i) => (
                    <View key={i} style={{ marginBottom: 16 }}>
                        <Card id={i} imageSrc={el.img} caption={el.title} />
                    </View>
                ))}
                <View style={{height: 100}}></View>
            </ScrollView>

            {/* 📱 Bottom Navigation */}
            <BottomBar />
        </>
    );
}
