import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing(4),
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    minWidth: 136,
  },
});

export default styles;
