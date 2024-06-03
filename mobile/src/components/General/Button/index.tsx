import { TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  type = 'contained',
  fullWidth = true,
  style,
}) => {
  const typeStyles = styles[type];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        typeStyles,
        fullWidth && styles.fullWidth,
        style,
      ]}>
      <Typography type="plain" uppercase italic color={typeStyles.color}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
