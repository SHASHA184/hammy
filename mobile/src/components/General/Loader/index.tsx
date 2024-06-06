import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} color={colors.black} />
    </View>
  );
};

export default Loader;
