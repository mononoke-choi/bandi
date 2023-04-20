declare module '*.svg' {
  // eslint-disable-next-line import/no-namespace
  import * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  export type ExtendedSVGProps = SvgProps & {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
  };

  const content: React.FC<ExtendedSVGProps>;
  export default content;
}
