import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 10,
  },
  contained: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
    color: colors.black,
  },
  fullWidth: {
    width: '100%',
  },
});

export default styles;
