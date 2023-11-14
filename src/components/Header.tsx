import { View, StyleSheet } from 'react-native';

import { Text } from '../UI/themed/Themed';
import { screenMargin } from '../UI/constants';
import { ArrowBack } from '../UI/themed/components/Icons';
import { HeaderButtonRight } from '../UI/themed/components/HeaderButtonRight';

interface IProps {
  headerHeight: number;
  backButton?: boolean;
  title?: string;
  rightButton?: React.ReactNode | null;
}

export const Header = ({
  headerHeight,
  backButton = false,
  title = '',
  rightButton = null,
}: IProps): JSX.Element => {
  return (
    <View style={styles.safeArea}>
      <View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.leftBlock}>{backButton ? <ArrowBack /> : null}</View>
        <View style={styles.centerBlock}>{title ? <Text>Center</Text> : null}</View>
        <View style={styles.rightBlock}>{rightButton || <HeaderButtonRight title="Edit" />}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: screenMargin,
  },
  header: {
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftBlock: { flex: 1, width: '7%', justifyContent: 'flex-start' },
  centerBlock: { flex: 8, justifyContent: 'center', alignItems: 'center' },
  rightBlock: { flex: 1, width: '7%', justifyContent: 'flex-end' },
});
