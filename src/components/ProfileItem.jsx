import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ArrowRight2 } from 'iconsax-react-native';

const ProfileItem = ({ title, Icon, onPress, colors, fontSize }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {Icon && <Icon color={colors.primary} size={20} variant="Bold" />}
      <Text
        style={{
          fontSize: fontSize.sm,
          color: colors.textSecondary,
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
      <ArrowRight2
        color={colors.textSecondary}
        size={20}
        variant="Bold"
        style={{ position: 'absolute', right: 20 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileItem;
