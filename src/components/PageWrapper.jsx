import { StyleSheet, View } from "react-native";
import { colors } from "../../assets/theme";

export default function PageWrapper({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        height: '100%',
        zIndex: 0,
        backgroundColor: colors.base,
    },
});