import { StyleSheet } from "react-native";
import { colors } from "../assets/theme";

export default function HorizontalList({props}) {
    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            {props}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        backgroundColor: colors.base
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});