import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../constants';

interface IProps {
  onPress?: () => void;
}

interface IBottomProps {
  visible?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const ArrowBack = ({ onPress }: IProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.arrow} onPress={onPress}>
      <AntDesign name="left" size={Fonts.default.uiSize + 12} color={Colors.main} />
    </TouchableOpacity>
  );
};

export const AddIcon = ({ visible, onPress, onLongPress }: IBottomProps): JSX.Element => {
  const displayStyle = visible ? 'none' : 'flex';

  return (
    <TouchableOpacity
      style={[{ display: displayStyle }, styles.bottomIcon]}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={100}
    >
      <Ionicons name="ios-add" size={Fonts.default.uiSize + 30} color={Colors.main} />
    </TouchableOpacity>
  );
};

export const GearIcon = ({ visible, onPress }: IBottomProps): JSX.Element => {
  const displayStyle = visible ? 'none' : 'flex';

  return (
    <TouchableOpacity style={[{ display: displayStyle }, styles.bottomIcon]} onPress={onPress}>
      <Ionicons
        name="ios-settings-outline"
        size={Fonts.default.uiSize + 6}
        style={{ fontSize: Fonts.default.uiSize + 16 }}
        color={Colors.main}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrow: {
    flex: 1,
    height: '100%',
    width: 30,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1%',
  },
  bottomIcon: {
    width: '12%',
    maxWidth: 70,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
