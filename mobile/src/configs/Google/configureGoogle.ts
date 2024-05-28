import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from './config';

const configureGoogle = () => {
  GoogleSignin.configure(config);
};

export default configureGoogle;
