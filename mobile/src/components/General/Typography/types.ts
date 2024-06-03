import { ReactNode } from 'react';
import { TextStyle } from 'react-native';

export type TypographyType = 'h1' | 'h2' | 'plain' | 'caption' | 'subtitle';

export type TypographyProps = {
  children: ReactNode;
  type: TypographyType;
  uppercase?: boolean;
  italic?: boolean;
  capitalize?: boolean;
  color?: string;
  style?: TextStyle;
};
