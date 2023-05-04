'use client';

import 'client-only';
import React, { ComponentProps } from 'react';
import { Text, XStack, YStack, Circle } from 'tamagui';
import { Notification } from 'web/app/api/notifications/notification';

import Windowing from '../block/windowing';

export function FixedRow({
  item,
  isLastItem,
  isWeb,
  ...rest
}: {
  item: {
    date: string;
    title: string;
  };
  isLastItem: boolean;
  isWeb?: boolean;
} & ComponentProps<typeof XStack>) {
  return (
    <XStack
      paddingVertical="$4"
      paddingHorizontal="$4"
      borderBottomColor="$gray5"
      borderBottomWidth={isLastItem ? '$0' : '$1'}
      space="$2.5"
      {...(isWeb && {
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      })}
      {...rest}
    >
      <Circle size="$3" backgroundColor="$gray8" />
      <YStack space="$2" flex={1}>
        <Text
          fontFamily="$body"
          fontSize="$4"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
        <Text fontFamily="$body" fontSize="$1" color="$gray10">
          {item.date?.toLocaleString()}
        </Text>
      </YStack>
    </XStack>
  );
}

export const ESTIMATED_ITEM_SIZE = 90;

interface NotificationListTemplateProps {
  data: Notification[];
}

export default function NotificationListTemplate({
  data = [],
}: NotificationListTemplateProps) {
  const count = data.length;

  return (
    <Windowing
      data={data}
      native={{
        estimatedItemSize: ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, index }) => (
          <FixedRow item={item} isLastItem={count - 1 === index} />
        ),
      }}
      web={{
        count,
        estimateSize: () => ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, size, start, isLastItem, index }) => (
          <FixedRow
            item={item}
            isLastItem={isLastItem}
            style={{
              height: `${size}px`,
            }}
            y={start}
            isWeb={true}
          >
            {index}
          </FixedRow>
        ),
      }}
    />
  );
}
