import { View } from 'react-native';
import styles from './styles';

type FloatingPanelProps = {
  children: React.ReactNode;
};

const FloatingPanel: React.FC<FloatingPanelProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FloatingPanel;
