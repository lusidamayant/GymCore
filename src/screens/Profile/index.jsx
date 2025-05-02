import { Button, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomBar from "../../components/BottomBar";
import { AppBar, PageWrapper, ProfileItem, TButton } from "../../components";
import { colors } from "../../../assets/theme";
import { ProfileData } from "../../data";
import { TFontSize, TRadius } from "../../../assets/TStyle";
import { ArrowCircleRight, ArrowRight, ArrowRight2, ArrowRight3, DirectRight, Edit2, Lock, Logout, Mobile } from "iconsax-react-native";

export default function Profile() {
    return (
        <PageWrapper>
            <AppBar title="Profile" />
            <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
                <View style={{ gap: 8, alignItems: 'center', marginTop: 50 }}>
                    <View style={profile.container}>
                        <ImageBackground
                            style={[profile.pic, { overflow: 'hidden' }]}
                            imageStyle={{ borderRadius: 100 }}
                            source={{
                                uri: ProfileData.image
                            }}
                        />
                        <TouchableOpacity style={profile.buttonEdit}>
                            <Edit2 color={colors.textPrimary} size={18} variant='Bold' />
                        </TouchableOpacity>
                    </View>
                    <Text style={profile.name}>{ProfileData.name}</Text>
                    <Text style={profile.email}>{ProfileData.email}</Text>
                    <TButton
                        title="Edit Profile"
                        style={{ width: '50%', marginTop: 10, alignSelf: 'center' }} // ✅ Correct
                        onPress={() => console.log('Edit Profile clicked')}
                        color={colors.primary}
                    />

                </View>
                <View style={{ marginTop: 20 }}>
                    <ProfileItem
                        title="Change Password"
                        Icon={Lock}
                        onPress={() => console.log('Change Password clicked')}
                        colors={colors}
                        fontSize={TFontSize}
                    />
                    <ProfileItem
                        title="Change Mobile Number"
                        Icon={Mobile}
                        onPress={() => console.log('Change Mobile clicked')}
                        colors={colors}
                        fontSize={TFontSize}
                    />
                    <ProfileItem
                        title="Logout"
                        Icon={Logout}
                        onPress={() => console.log('Logout clicked')}
                        colors={colors}
                        fontSize={TFontSize}
                    />
                </View>

            </ScrollView>
            {/* BOTTOM NAV SECTION */}
            {/* <BottomBar /> */}
        </PageWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const profile = StyleSheet.create({
    pic: { width: 150, height: 150, borderRadius: 50 },
    container: {
        position: 'relative'
    },
    buttonEdit: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.grey,
        borderRadius: 30,
        position: 'absolute',
        bottom: 6,
        right: 6,
        backgroundColor: colors.primary,
    },
    name: {
        fontSize: TFontSize.lg,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 10,
    },
    email: {
        fontSize: TFontSize.sm,
        color: colors.textSecondary,
        fontWeight: '500',
    }
});