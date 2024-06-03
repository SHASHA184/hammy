import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: spacing(4),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
