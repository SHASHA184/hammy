import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export const typeStyles = StyleSheet.create({
  h1: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 30,
    color: colors.black,
  },
  plain: {
    fontFamily: 'ABeeZee-Regular',
    fontSize: 16,
    color: colors.black,
  },
  caption: {
    fontFamily: 'ABeeZee-Regular',
    fontSize: 12,
    color: colors.black,
  },
});

export const formatStyles = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  italic: {
    fontStyle: 'italic',
  },
});
