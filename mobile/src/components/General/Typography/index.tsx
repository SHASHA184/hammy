import { Text } from 'react-native';
import styles from './styles';
import { TypographyProps } from './types';

const Typography = ({ children, type }: TypographyProps) => {
  const typeStyles = styles[type];

  return <Text style={typeStyles}>{children}</Text>;
};

export default Typography;
