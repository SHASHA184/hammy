import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  textField: {
    width: '100%',
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: spacing(4),
    marginTop: spacing(5),
  },
});

export default styles;
