import { StyleSheet } from 'react-native';

import { screenMargin } from './constants';

export const screenView = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: screenMargin,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export const container = screenView.container;
