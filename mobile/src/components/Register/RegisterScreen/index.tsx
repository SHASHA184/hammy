import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import useAuth from '../../../API/auth/hooks/useAuth';
import Typography from '../../General/Typography';
import { RootStackParamList } from '../../Navigation/Stack/types';
import styles from './styles';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
  };

  const handleCreateAccount = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <Typography type="h1">Register</Typography>
      <GoogleSigninButton style={styles.googleButton} onPress={handleLogin} />
      <TouchableOpacity onPress={handleCreateAccount}>
        <Typography type="plain">I have account already</Typography>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
