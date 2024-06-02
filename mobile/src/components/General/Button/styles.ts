import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.black,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 10,
  },
});

export default styles;
