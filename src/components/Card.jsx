import { ArrowRight, Heart } from "iconsax-react-native";
import { useEffect, useState } from "react";
import { Animated, Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/theme";
import { TPadding, TRadius } from "../../assets/TStyle";
import { useNavigation } from "expo-router";

const Card = ({ id, imageSrc, caption, loading = false }) => {
    const [isLoved, setIsLoved] = useState(false);
    const shimmerAnim = new Animated.Value(0);
    const navigation = useNavigation();

    useEffect(() => {
        const shimmerLoop = Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        );

        shimmerLoop.start();

        return () => {
            shimmerLoop.stop();
        }
    }, []);

    const shimmerTranslate = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, Dimensions.get('window').width + 200]
    });

    if (loading) {
        return (
            <View style={shimmer.container}>
                <Animated.View style={[shimmer.shiny, {
                    transform: [{ translateX: shimmerTranslate }, { rotate: '20deg' }]
                }]} />
            </View>
        );
    }

    return (
        <Pressable onPress={() => navigation.navigate('DetailNews', { newsId: id })}>
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
        </Pressable>
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

const shimmer = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 20,
        height: 240,
        borderRadius: TRadius.md,
        marginRight: 10,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#e1e1e1'
    },
    shiny: {
        position: 'absolute',
        width: '16%',
        height: '300%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '-100%',
        left: 0,
    }
});

export default Card;