import { default as NextImage } from 'next/image';
import React from 'react';

import { ImageProps } from './shared';

export default function Image({ web }: ImageProps) {
  return <NextImage {...web} />;
}
