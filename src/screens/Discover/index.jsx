import { ScrollView, View } from "react-native";
import { gymLists } from "../../data";
import { AppBar, Card, PageWrapper, SearchInput } from "../../components";
import { useState } from "react";

export default function Discover() {

    const [search, setSearch] = useState('');

    const filteredGym = gymLists.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <PageWrapper>
            <AppBar title="Explore Gym Doorz" />
            <ScrollView style={{ padding: 10, marginTop: 6 }} showsVerticalScrollIndicator={false}>
                <SearchInput value={search} onChangeText={setSearch} placeholder="Search GymDoorz..." />

                {/* 📰 News List */}
                {filteredGym.map((el, i) => (
                    <View key={i} style={{ marginBottom: 16 }}>
                        <Card id={i} imageSrc={el.img} caption={el.title} />
                    </View>
                ))}
                <View style={{ height: 70 }}></View>
            </ScrollView>
        </PageWrapper>
    );
}