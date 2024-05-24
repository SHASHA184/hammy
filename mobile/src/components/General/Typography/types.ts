import {ReactNode} from 'react';

export type TypographyType = 'plain';

export type TypographyProps = {
  children: ReactNode;
  type: TypographyType;
};
