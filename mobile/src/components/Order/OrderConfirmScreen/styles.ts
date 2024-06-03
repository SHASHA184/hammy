import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-around',
    paddingBottom: spacing(12),
  },
  addressContainer: { width: '100%', alignItems: 'center' },
  orderSummaryContainer: {
    backgroundColor: colors.lightGrey,
    width: '100%',
    padding: spacing(2),
    borderRadius: 10,
  },
});

export default styles;
