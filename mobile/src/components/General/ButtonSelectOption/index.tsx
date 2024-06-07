import React from 'react';
import { TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import styles from './styles';

type ButtonSelectOptionProps = {
  selected: boolean;
  onPress: () => void;
  children: React.ReactNode;
  active?: boolean;
};

const ButtonSelectOption: React.FC<ButtonSelectOptionProps> = ({
  children,
  onPress,
  active,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active && styles.active]}>
      <Typography type="plain">{children}</Typography>
    </TouchableOpacity>
  );
};

export default ButtonSelectOption;
