import { ReactNode } from 'react';

export type TypographyType = 'h1' | 'plain';

export type TypographyProps = {
  children: ReactNode;
  type: TypographyType;
};
