import React from 'react';
import { Text, Stack, XStack, YStack } from 'tamagui';
import LocationSVG from 'ui/src/assets/location.svg';

export default function MyPageTopTabHeaderTemplate() {
  return (
    <YStack space={true}>
      <XStack gap={10} backgroundColor="$gray2" padding="$5">
        <Stack
          borderRadius={100}
          backgroundColor="#ddd"
          width="$5"
          height="$5"
        />
        <YStack justifyContent="space-around">
          <Text fontFamily="$body" fontSize="$4">
            mononoke.choi
          </Text>
          <XStack alignItems="center">
            <LocationSVG
              width={20}
              height={20}
              color="black"
              style={{ marginLeft: -2 }}
            />
            <Text fontFamily="$body" fontSize="$3">
              seoul
            </Text>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
}
