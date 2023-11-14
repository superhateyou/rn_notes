import { Platform, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

import { View } from '../Themed';
import { AddIcon, GearIcon } from './Icons';
import { EScreens } from '../../../navigation/screens';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setDrawer, setModal } from '../../../store/reducers/appSlice';
import { footerHeight, insetsBlurIntensity } from '../../constants';

export const StartMenu = (): JSX.Element => {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();

  const drawer = useAppSelector(state => state.app.drawer);
  const modal = useAppSelector(state => state.app.modal);
  const blurOn = useAppSelector(state => state.app.blurOn);
  const { bottom } = useAppSelector(state => state.app.insets);

  const isAndroid = Platform.OS === 'android' ? true : false;
  const tint = colorScheme || 'default';

  const handleGear = (): void => {
    if (isAndroid) {
      navigator.navigate(EScreens.Settings as never);
    } else {
      dispatch(setDrawer(true));
    }
  };

  const BlurContainer = ({ children }: { children: React.ReactNode }): JSX.Element => {
    if (blurOn) {
      return (
        <BlurView
          intensity={insetsBlurIntensity}
          tint={tint}
          style={[styles.blurContainer, { height: footerHeight + bottom }]}
        >
          <View style={styles.container}>{children}</View>
        </BlurView>
      );
    } else {
      return (
        <View style={[styles.blurContainer, { height: footerHeight + bottom }]}>
          <View style={styles.container}>{children}</View>
        </View>
      );
    }
  };

  return (
    <BlurContainer>
      <GearIcon visible={drawer || modal} onPress={handleGear} />
      <AddIcon
        visible={drawer || modal}
        onLongPress={(): void => {
          dispatch(setModal(true));
        }}
      />
    </BlurContainer>
  );
};

const styles = StyleSheet.create({
  blurContainer: { width: '100%', position: 'absolute', bottom: 0 },
  container: {
    flex: 1,
    width: '100%',
    minHeight: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    zIndex: 6,
    position: 'absolute',
    top: '0%',
  },
});
