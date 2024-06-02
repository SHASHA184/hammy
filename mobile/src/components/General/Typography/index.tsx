import { Text } from 'react-native';
import { typeStyles, formatStyles } from './styles';
import { TypographyProps } from './types';

const Typography = ({
  children,
  type,
  uppercase,
  italic,
  color,
  capitalize,
}: TypographyProps) => {
  const typeStyle = typeStyles[type];

  return (
    <Text
      style={[
        typeStyle,
        uppercase && formatStyles.uppercase,
        italic && formatStyles.italic,
        capitalize && formatStyles.capitalize,
        !!color && { color },
      ]}>
      {children}
    </Text>
  );
};

export default Typography;
