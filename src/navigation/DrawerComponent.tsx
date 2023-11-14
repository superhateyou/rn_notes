import { Platform, StyleSheet, useColorScheme } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

import { View } from '../UI/themed/Themed';
import { Colors, screenMargin } from '../UI/constants';
import { container } from '../UI/styles';
import { SettingsComponent } from '../components/Settings';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDrawer } from '../store/reducers/appSlice';
import { BluredDrawer } from '../UI/themed/components/BluredDrawer';

interface IProps {
  children?: React.ReactNode;
}

export const DrawerMenu = ({ children }: IProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const drawer = useAppSelector(state => state.app.drawer) || false;

  const overlayBackground = colorScheme === 'light' ? Colors.light.shadow : Colors.dark.shadow;
  const blurOn = useAppSelector(state => state.app.blurOn);

  return (
    <Drawer
      open={drawer}
      onOpen={(): void => {
        dispatch(setDrawer(true));
      }}
      onClose={(): void => {
        dispatch(setDrawer(false));
      }}
      style={container}
      gestureHandlerProps={{ enabled: drawer }}
      overlayStyle={{ backgroundColor: overlayBackground }}
      drawerType={'front'}
      drawerStyle={styles.drawerStyle}
      swipeMinVelocity={100}
      renderDrawerContent={(): JSX.Element => {
        return (
          <View style={styles.drawerContent}>
            <SettingsComponent />
          </View>
        );
      }}
    >
      <View style={container}>
        {blurOn ? <BluredDrawer /> : null}
        {children}
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: '66%',
    height: '100%',
    maxWidth: 500,
    borderLeftColor: 'orange',
  },
  drawerContent: {
    width: '100%',
    height: '100%',
    maxWidth: 500,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 3,
    borderRightColor: Colors.main,
  },
});
