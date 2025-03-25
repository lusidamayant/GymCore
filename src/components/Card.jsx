import { ArrowRight, Heart } from "iconsax-react-native";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/theme";
import { TPadding, TRadius } from "../../assets/TStyle";

const Card = ({ id, imageSrc, caption }) => {
    const [isLoved, setIsLoved] = useState(false);

    return (
        <View key={id} style={styles.card}>
            <Image source={{ uri: imageSrc }} style={styles.image} />
            <View style={wishlist.container}>
                <TouchableOpacity style={wishlist.icon} onPress={() => setIsLoved(!isLoved)}>
                    <Heart color={isLoved ? colors.danger : colors.black} size={32} variant={isLoved ? "Bold" : "Outline"} />
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Text style={styles.text}>{caption}</Text>

                <ArrowRight color={colors.black} size={22} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.base
    },
    card: {
        width: Dimensions.get('window').width - 20,
        height: 240,
        borderRadius: TRadius.md,
        marginRight: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    label: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: TPadding.sm,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.textPrimary
    }
});

const wishlist = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 50,
        borderRadius: TRadius.lg,
        height: 50,
        position: 'absolute',
        top: 16,
        right: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Card;
