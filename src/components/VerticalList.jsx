import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";


export default function VerticalList({ children, style }) {
    return (
        <ScrollView style={[styles.container, style]} showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.base
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});