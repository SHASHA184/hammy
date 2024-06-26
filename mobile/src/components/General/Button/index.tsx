import { TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  type = 'contained',
  fullWidth,
  width,
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
        !!width && { width },
        style,
      ]}>
      <Typography type="plain" uppercase italic color={typeStyles.color}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
