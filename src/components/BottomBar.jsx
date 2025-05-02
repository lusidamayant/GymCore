import { View, TouchableOpacity, Text } from 'react-native';
import { Home2, Discover, Notepad2, User } from 'iconsax-react-native';
import { colors } from '../../assets/theme';
import { TFontSize } from '../../assets/TStyle';

const BottomBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: Home2 },
    { name: 'Explore', icon: Discover },
    { name: 'News', icon: Notepad2 },
    { name: 'Profile', icon: User },
  ];

  return (
    
    <View style={styles.container}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;
        
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => setActiveTab(tab.name)}
          >
            <Icon
              color={isActive ? colors.danger : colors.textPrimary}
              size={26}
              variant={isActive ? 'Bold' : 'Linear'}
            />
            <Text style={[
              styles.text,
              { color: isActive ? colors.danger : colors.textPrimary }
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary,
    // height: 70,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 12,
    marginBottom: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: TFontSize.sm,
    marginTop: 4,
  },
};

export default BottomBar;