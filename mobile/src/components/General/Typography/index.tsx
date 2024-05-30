import { Text } from 'react-native';
import { typeStyles, formatStyles } from './styles';
import { TypographyProps } from './types';

const Typography = ({ children, type, uppercase, italic }: TypographyProps) => {
  const typeStyle = typeStyles[type];

  return (
    <Text
      style={[
        typeStyle,
        uppercase && formatStyles.uppercase,
        italic && formatStyles.italic,
      ]}>
      {children}
    </Text>
  );
};

export default Typography;
