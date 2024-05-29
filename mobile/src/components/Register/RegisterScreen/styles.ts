import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.beige,
  },
  googleButton: {
    marginTop: spacing(4),
    marginBottom: spacing(6),
  },
});

export default styles;
