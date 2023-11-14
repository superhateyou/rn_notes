import { useEffect } from 'react';

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { container } from './UI/styles';
import { DrawerMenu } from './navigation/DrawerComponent';
import { useAppDispatch } from './store/hooks';
import { setInsets } from './store/reducers/appSlice';
import { Navigator } from './navigation/Navigator';

export const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  dispatch(setInsets(insets));

  return (
    <View style={container}>
      <DrawerMenu>
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigator />
        </NavigationContainer>
      </DrawerMenu>
    </View>
  );
};
