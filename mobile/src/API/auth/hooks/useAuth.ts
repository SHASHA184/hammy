import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUser(user);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            break;
          case statusCodes.IN_PROGRESS:
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            break;
        }
      }
    }
  };

  return { user, login };
};

export default useAuth;
