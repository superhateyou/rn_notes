import { BlurView } from 'expo-blur';
import { View, useColorScheme } from 'react-native';

import { useAppSelector } from '../../../store/hooks';

export const BluredDrawer = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const drawer = useAppSelector(state => state.app.drawer);

  const color = colorScheme === 'light' ? 'dark' : 'light';

  if (!drawer) return <View></View>;

  return (
    <BlurView
      intensity={5}
      tint={color}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
      }}
    ></BlurView>
  );
};
