import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store/store';
import { Layout } from './src/Layout';

export const App = (): JSX.Element => {
  enableScreens();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style={'auto'} />
        <Layout />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
