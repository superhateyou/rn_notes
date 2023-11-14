import { BlurView } from 'expo-blur';
import { StyleProp, ViewStyle, useColorScheme } from 'react-native';

import { useAppSelector } from '../../../store/hooks';
import { View } from '../Themed';
import { insetsBlurIntensity } from '../../constants';

interface IProps {
  children: React.ReactNode;
  styles: StyleProp<ViewStyle>;
}

export const BlurComponent = ({ children, styles }: IProps): JSX.Element => {
  const blurOn = useAppSelector(state => state.app.blurOn);
  const colorScheme = useColorScheme();

  const tint = colorScheme || 'default';

  if (blurOn) {
    return (
      <BlurView intensity={insetsBlurIntensity} tint={tint} style={styles}>
        {children}
      </BlurView>
    );
  } else {
    return <View style={styles}>{children}</View>;
  }
};
