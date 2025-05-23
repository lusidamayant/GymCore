import { View, TextInput, StyleSheet } from 'react-native';
import { SearchNormal } from 'iconsax-react-native';
import { colors } from '../../assets/theme';
import { TFontSize, TRadius } from '../../assets/TStyle';

const SearchInput = ({ value, onChangeText, placeholder = 'Search...' }) => {
  return (
    <View style={styles.container}>
      <SearchNormal
        size={20}
        color={colors.textSecondary}
        variant="Outline"
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: TRadius.sm,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: TFontSize.sm,
    color: colors.textSecondary,
    paddingVertical: 0,
  },
});

export default SearchInput;
