import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

type TextFieldProps = {
  placeholder: string;
};

const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      style={styles.textField}
    />
  );
};

export default TextField;
