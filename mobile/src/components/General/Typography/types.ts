import { ReactNode } from 'react';

export type TypographyType = 'h1' | 'plain' | 'caption';

export type TypographyProps = {
  children: ReactNode;
  type: TypographyType;
  uppercase?: boolean;
  italic?: boolean;
};
