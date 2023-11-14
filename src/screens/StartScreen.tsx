import { useNavigation, useNavigationState } from '@react-navigation/native';
import { View as DefaultView } from 'react-native';

import { View, Text, ScrollView } from '../UI/themed/Themed';
import { screenView } from '../UI/styles';
import { AddModal } from '../UI/themed/components/AddModal';
import { EScreens } from '../navigation/screens';
import { StartMenu } from '../UI/themed/components/StartMenu';
import { useAppSelector } from '../store/hooks';
import { headerHeight, screenMargin } from '../UI/constants';

export const StartScreen = (): JSX.Element => {
  const nav = useNavigation();
  const currentRoute = useNavigationState(state => state?.routeNames[state?.index]);
  const { top } = useAppSelector(state => state.app.insets);
  const activeMenu = currentRoute === EScreens.Start || currentRoute === undefined;

  return (
    <View style={screenView.container}>
      <ScrollView style={{ padding: screenMargin, paddingTop: headerHeight + top }}>
        <DefaultView style={{ width: '100%', minHeight: 800, padding: screenMargin }}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate laborum vero
            at velit, blanditiis asperiores dolorum, provident aliquam vel, hic in excepturi minus
            nostrum distinctio! Quasi doloribus quisquam sunt!
          </Text>
        </DefaultView>
      </ScrollView>
      <AddModal />
      {activeMenu ? <StartMenu /> : null}
    </View>
  );
};
