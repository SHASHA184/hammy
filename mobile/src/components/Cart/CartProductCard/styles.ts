import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: 160,
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;