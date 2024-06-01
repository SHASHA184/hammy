import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 174,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 15,
  },
  content: {
    margin: spacing(2),
  },
});

export default styles;
