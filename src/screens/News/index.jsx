import { Button, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomBar from "../../components/BottomBar";
import { AppBar, Card, PageWrapper, ProfileItem, SearchInput, TButton } from "../../components";
import { colors } from "../../../assets/theme";
import { TFontSize, TRadius } from "../../../assets/TStyle";
import { ArrowCircleRight, ArrowRight, ArrowRight2, ArrowRight3, DirectRight, Edit, Edit2, Lock, Logout, Mobile, SearchNormal } from "iconsax-react-native";
import { useEffect, useState } from "react";
import Fab from "../../components/Fab";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getFirestore, collection, onSnapshot }  from 'firebase/firestore';
import { db } from "../../../firebaseConfig";

export default function News() {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            loadNews();
        }
    }, [isFocused]);

    const loadNews = async () => {
        setLoading(true);
        try {
            const newsRef = collection(db, 'News');

            const subscriber = onSnapshot(newsRef, (snapshot) => {
                const news = [];
                snapshot.forEach((doc) => {
                    news.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });
                console.log(news);
                setNews(news);
            });
            // setNews(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <PageWrapper>
            <AppBar title="News" />
            <ScrollView style={{ padding: 10, marginTop: 6, position: 'relative' }} showsVerticalScrollIndicator={false}>
                <SearchInput value={search} onChangeText={setSearch} />

                {/* 📰 News List */}
                {loading ? (
                    // Show shimmer loading when data is loading
                    Array.from({ length: 5 }).map((_, i) => (
                        <View key={i} style={{ marginBottom: 16 }}>
                            <Card loading={true} />
                        </View>
                    ))
                ) : (
                    // Show actual news when data is loaded
                    filteredNews.map((el, i) => (
                        <View key={i} style={{ marginBottom: 16 }}>
                            <Card id={el.id} imageSrc={el.img} caption={el.title} loading={false} />
                        </View>
                    ))
                )}
                <View style={{ height: 70 }}></View>
            </ScrollView>

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
        bottom: 80,
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