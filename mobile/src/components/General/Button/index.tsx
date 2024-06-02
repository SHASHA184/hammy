import { TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import Typography from '../Typography';
import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  children: string;
};

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Typography type="plain" uppercase italic color={colors.white}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
