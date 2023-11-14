import { createStackNavigator } from '@react-navigation/stack';

import { EScreens } from './screens';
import { StartScreen } from '../screens/StartScreen';
import { NoteScreen } from '../screens/NoteScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { headerHeight } from '../UI/constants';
import { useAppSelector } from '../store/hooks';
import { BlurComponent } from '../UI/themed/components/BlurComponent';
import { Header } from '../components/Header';

const Stack = createStackNavigator();

export const Navigator = (): JSX.Element => {
  const { top } = useAppSelector(state => state.app.insets);

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
        headerTransparent: true,
        headerShadowVisible: true,
      }}
      initialRouteName={EScreens.Start}
    >
      <Stack.Screen
        name={EScreens.Start}
        component={StartScreen}
        options={{
          header: (): JSX.Element => (
            <BlurComponent styles={{ width: '100%', height: headerHeight + top }}>
              <Header headerHeight={headerHeight} backButton={false} />
            </BlurComponent>
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name={EScreens.Note} component={NoteScreen} />
      <Stack.Screen name={EScreens.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
