import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  productImage: {
    margin: 'auto',
    marginBottom: spacing(4),
    marginTop: spacing(14),
    width: '95%',
  },
  productTitle: {
    marginVertical: spacing(5),
  },
});

export default styles;
