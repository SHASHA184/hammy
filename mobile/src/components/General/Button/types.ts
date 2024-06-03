import { DimensionValue, ViewStyle } from 'react-native';

export type ButtonType = 'contained' | 'outlined';
export type ButtonProps = {
  onPress: () => void;
  children: string;
  type?: ButtonType;
  fullWidth?: boolean;
  style?: ViewStyle;
  width?: DimensionValue;
};
