import { View, StyleSheet } from 'react-native';

import { screenMargin } from '../UI/constants';

export const SettingsComponent = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', padding: screenMargin },
  content: { display: 'flex', width: '100%', height: '100%' },
});
