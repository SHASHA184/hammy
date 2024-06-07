import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AuthSliceState, loginUser, registerUser, logoutUser } from '../auth';
import useAppDispatch from './useAppDispatch';

const useAuth = () => {
  const { user, isLoading } = useSelector<RootState, AuthSliceState>(
    state => state.auth,
  );

  const isLoggedIn = !!user;

  const dispatch = useAppDispatch();

  const login = async () => {
    const res = await dispatch(loginUser()).unwrap();
    return res;
  };

  const register = async () => {
    const res = await dispatch(registerUser()).unwrap();
    return res;
  };

  const logout = () => {
    return dispatch(logoutUser());
  };

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
    register,
    logout,
  };
};

export default useAuth;
