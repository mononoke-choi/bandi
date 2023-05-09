import React from 'react';
import { Image as TamaguiImage } from 'tamagui';

import { ImageProps } from './shared';

export default function Image({ native }: ImageProps) {
  return <TamaguiImage {...native} />;
}
