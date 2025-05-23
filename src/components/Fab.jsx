import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { Add, Edit2, MessageEdit, PenAdd } from "iconsax-react-native";

export default function Fab({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.fab}
            onPress={onPress}
            activeOpacity={0.9} // Optional: Add a ripple effect on press
        >
            <Edit2 color={colors.textPrimary} size={24} variant="Bold" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 80, // Sesuaikan dengan tinggi bottom bar
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