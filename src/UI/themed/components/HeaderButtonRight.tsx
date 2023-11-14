import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors, Fonts } from '../../constants';

interface IProps {
  title: string;
  onPress?: () => void;
}

export const HeaderButtonRight = ({ title, onPress }: IProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '6%',
  },
  title: {
    fontSize: Fonts.default.uiSize,
    color: Colors.main,
    fontWeight: Fonts.default.uiWeightAlt,
  },
});
