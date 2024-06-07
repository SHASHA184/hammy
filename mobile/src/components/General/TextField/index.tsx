import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

type TextFieldProps = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      style={styles.textField}
      value={value}
      onChange={e => setValue(e.nativeEvent.text)}
    />
  );
};

export default TextField;
