import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";


export default function HorizontalList({ children, style }) {
    return (
        <ScrollView style={[styles.container, style]} horizontal showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        // backgroundColor: colors.base
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});