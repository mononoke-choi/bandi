import React, { ComponentProps } from 'react';
import { Text, XStack, YStack, Circle } from 'tamagui';

import Windowing from '../block/windowing';

import { data as DATA } from './data.json';

function FixedRow({
  item,
  isLastItem,
  ...rest
}: {
  item: {
    date: string;
    title: string;
  };
  isLastItem: boolean;
} & ComponentProps<typeof XStack>) {
  return (
    <XStack
      paddingVertical="$4"
      paddingHorizontal="$4"
      borderBottomColor="$gray5"
      borderBottomWidth={isLastItem ? '$0' : '$1'}
      space="$2.5"
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

export default function NotificationListTemplate() {
  const count = DATA.length;
  const estimatedItemSize = 100;

  return (
    <Windowing
      data={DATA}
      native={{
        estimatedItemSize,
        renderItem: ({ item, index }) => (
          <FixedRow item={item} isLastItem={count - 1 === index} />
        ),
      }}
      web={{
        count,
        estimateSize: () => estimatedItemSize,
        renderItem: ({ item, size, start, isLastItem, index }) => (
          <FixedRow
            item={item}
            isLastItem={isLastItem}
            style={{
              height: `${size}px`,
            }}
            y={start}
            position="absolute"
            width="100%"
            left={0}
          >
            {index}
          </FixedRow>
        ),
      }}
    />
  );
}
