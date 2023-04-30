import { faker } from '@faker-js/faker';
import { FlashList } from '@shopify/flash-list';
import { times } from 'lodash';
import React from 'react';
import { Text, XStack, YStack, Circle } from 'tamagui';

const DATA = times(3, () => ({
  date: faker.date.recent(),
  title: faker.lorem.lines(),
}));

export default function NotificationList() {
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => (
        <XStack
          paddingVertical="$4"
          paddingHorizontal="$4"
          borderBottomColor="$gray5"
          borderBottomWidth="$1"
          space="$2.5"
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
              {item.date.toLocaleString()}
            </Text>
          </YStack>
        </XStack>
      )}
      estimatedItemSize={100}
    />
  );
}
