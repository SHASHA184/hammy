import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../../redux/hooks';
import Typography from '../../General/Typography';
import { RootStackParamList } from '../../Navigation/Stack/types';
import styles from './styles';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
  };

  const handleCreateAccount = () => navigation.navigate('Register');

  return (
    <View style={styles.container}>
      <Typography type="h1" uppercase>
        Login
      </Typography>
      <GoogleSigninButton style={styles.googleButton} onPress={handleLogin} />
      <TouchableOpacity onPress={handleCreateAccount}>
        <Typography type="plain">I want to create account</Typography>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
