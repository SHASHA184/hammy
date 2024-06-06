import React from 'react';
import LoaderKit from 'react-native-loader-kit';
import { View } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LoaderKit style={styles.loader} name="LineScale" color={colors.black} />
    </View>
  );
};

export default Loader;
