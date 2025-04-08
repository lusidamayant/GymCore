import { TouchableOpacity, Text } from 'react-native';
import { colors } from '../../assets/theme';

const TButton = ({ title, onPress, color = colors.primary, fullWidth = false, style = {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignSelf: fullWidth ? 'stretch' : 'flex-start',
        alignItems: 'center', // biar teks tetap di tengah saat full width
        ...style,
      }}
    >
      <Text style={{ color: colors.textPrimary, fontSize: 12, fontWeight: '500' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export default TButton;