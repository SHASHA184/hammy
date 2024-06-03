import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type PaddingContainerProps = {
  children: React.ReactNode;
};

const PaddingContainer: React.FC<PaddingContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default PaddingContainer;
