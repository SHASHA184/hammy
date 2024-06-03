import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type ButtonSelectProps = {
  children: React.ReactNode[];
};

const ButtonSelect: React.FC<ButtonSelectProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ButtonSelect;
