import { TouchableWithoutFeedback, useColorScheme, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AddModalOptions } from './AddModalOptions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setModal } from '../../../store/reducers/appSlice';

export const AddModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();
  const modal = useAppSelector(state => state.app.modal);
  const isBlur = useAppSelector(state => state.app.blurOn);

  const color = colorScheme === 'light' ? 'rgb(80,80,80)' : 'rgb(170,170,170)';
  const tint = colorScheme === 'light' ? 'light' : 'dark';

  return (
    <Modal
      isVisible={modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      coverScreen={true}
      backdropColor={tint}
      style={{ height: '100%', margin: 0 }}
      backdropOpacity={0.35}
      useNativeDriver={false}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      animationInTiming={300}
      animationOutTiming={300}
      hasBackdrop={!isBlur}
      customBackdrop={<View style={{ flex: 1, backgroundColor: color }}></View>}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={(): void => {
          dispatch(setModal(false));
        }}
      >
        {!isBlur ? (
          <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <AddModalOptions />
          </View>
        ) : (
          <BlurView intensity={15} tint={tint} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
              <AddModalOptions />
            </SafeAreaView>
          </BlurView>
        )}
      </TouchableWithoutFeedback>
    </Modal>
  );
};
