'use client';

import 'client-only';
import { isFunction } from 'lodash';
import React, { ComponentProps, ReactNode } from 'react';
import { Stack, Text, XStack } from 'tamagui';

import { ACTIVE_TINT_COLOR } from '../../config/constant';

export interface AppHeaderProps {
  title?: string | { (props: ComponentProps<typeof Text>): ReactNode };
  headerLeft?: (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
  }) => React.ReactNode;
  headerRight?: (props: {
    tintColor?: string;
    pressColor?: string;
    pressOpacity?: number;
  }) => React.ReactNode;
}

const styles = {
  floatingCenterTitle: {
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
  },
  pressColor: '#00ae77',
  pressOpacity: 0.8,
  tintColor: ACTIVE_TINT_COLOR,
} as const;

export default function AppHeader({
  title,
  headerRight,
  headerLeft,
}: AppHeaderProps) {
  const hasLeftItem = isFunction(headerLeft);
  const titleStyle = {
    fontFamily: '$body',
    pointerEvents: 'box-none',
    ...(hasLeftItem && styles.floatingCenterTitle),
  } as const;

  return (
    <XStack
      // @ts-expect-error Tamagui-unsupported-web-only-type
      position="sticky"
      top={0}
      left={0}
      right={0}
      backgroundColor="$gray1"
      height="$4.5"
      alignItems="center"
      paddingHorizontal="$2.5"
      columnGap="$3"
    >
      {headerLeft?.({
        pressColor: styles.pressColor,
        pressOpacity: styles.pressOpacity,
        tintColor: styles.tintColor,
      })}
      {isFunction(title) ? (
        title(titleStyle)
      ) : (
        <Text {...titleStyle}>{title}</Text>
      )}
      <Stack marginLeft="auto">
        {headerRight?.({
          pressColor: styles.pressColor,
          pressOpacity: styles.pressOpacity,
          tintColor: styles.tintColor,
        })}
      </Stack>
    </XStack>
  );
}
