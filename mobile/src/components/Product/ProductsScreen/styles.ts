import { StyleSheet } from 'react-native';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  searchInput: {
    width: '100%',
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: spacing(4),
    marginTop: spacing(5),
  },
  productsContainer: {
    marginTop: spacing(6),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default styles;
