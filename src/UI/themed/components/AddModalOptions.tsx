import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { BlurView } from 'expo-blur';

import { View, Text, ViewDrawer } from '../Themed';
import { Colors, Fonts } from '../../constants';
import { useAppSelector } from '../../../store/hooks';

export const AddModalOptions = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const isBlur = useAppSelector(state => state.app.blurOn);

  const blurIntensity = 45;
  const color = colorScheme === 'light' ? Colors.light.text : Colors.dark.text;
  const tint = colorScheme === 'light' ? 'light' : 'dark';

  const ButtonContainer = ({ children }: { children: React.ReactNode }): JSX.Element => {
    if (isBlur) {
      return (
        <BlurView intensity={blurIntensity} tint={tint} style={styles.option}>
          {children}
        </BlurView>
      );
    } else {
      return <ViewDrawer style={styles.option}>{children}</ViewDrawer>;
    }
  };

  return (
    <View style={styles.modal}>
      <TouchableOpacity style={styles.blurView}>
        <ButtonContainer>
          <Text style={[styles.text, { color: color }]}>Add new note</Text>
          <MaterialCommunityIcons
            name="note-plus-outline"
            size={Fonts.default.uiSize + 3}
            color={color}
            style={{ paddingHorizontal: 3 }}
          />
        </ButtonContainer>
      </TouchableOpacity>
      <View style={[styles.divider]} />
      <TouchableOpacity style={styles.blurView}>
        <ButtonContainer>
          <Text style={[styles.text, { color: color }]}>Add new folder</Text>
          <AntDesign
            name="addfolder"
            size={Fonts.default.uiSize + 1}
            color={color}
            style={{ paddingHorizontal: 3 }}
          />
        </ButtonContainer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '55%',
    maxWidth: 250,
    height: (Fonts.default.uiSize + 17) * 2,
    borderRadius: 12,
    bottom: '11%',
    right: '6%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: Fonts.default.uiSize - 1,
    fontWeight: '300',
    paddingLeft: 7,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    paddingHorizontal: '3%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: Colors.main,
  },
  blurView: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
