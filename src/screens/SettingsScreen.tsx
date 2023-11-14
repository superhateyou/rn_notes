import { container } from '../UI/styles';
import { SafeAreaView } from '../UI/themed/Themed';
import { SettingsComponent } from '../components/Settings';

export const SettingsScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={container}>
      <SettingsComponent />
    </SafeAreaView>
  );
};
