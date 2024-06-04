import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/types';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
