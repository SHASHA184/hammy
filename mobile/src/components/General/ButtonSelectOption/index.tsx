import React from 'react';
import { TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import styles from './styles';

type ButtonSelectOptionProps = {
  selected: boolean;
  onPress: () => void;
  children: React.ReactNode;
};

const ButtonSelectOption: React.FC<ButtonSelectOptionProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Typography type="plain">{children}</Typography>
    </TouchableOpacity>
  );
};

export default ButtonSelectOption;
