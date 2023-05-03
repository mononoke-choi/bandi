import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { WindowingProps } from './shared';

export default function Windowing<T>(props: WindowingProps<T>) {
  return <FlashList {...props} {...props.native} />;
}
