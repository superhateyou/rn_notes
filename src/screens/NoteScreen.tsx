import { View } from '../UI/themed/Themed';
import { screenView } from '../UI/styles';

export const NoteScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={screenView.container}></View>
    </View>
  );
};
