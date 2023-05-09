import React from 'react';
import { Text, Stack, XStack, YStack } from 'tamagui';
import LocationSVG from 'ui/src/assets/location.svg';

import Image from '../../../block/image/image';

const PROFILE_IMAGE_SIZE = 54;
export default function MyPageTopTabHeaderTemplate() {
  return (
    <YStack space={true}>
      <XStack gap={10} backgroundColor="$gray2" padding="$5">
        <Stack borderRadius="$20" overflow="hidden">
          <Image
            web={{
              alt: 'Random people faker image',
              height: PROFILE_IMAGE_SIZE,
              src: 'https://i.pravatar.cc/150',
              unoptimized: true,
              width: PROFILE_IMAGE_SIZE,
            }}
            native={{
              source: {
                height: PROFILE_IMAGE_SIZE,
                uri: 'https://i.pravatar.cc/150',
                width: PROFILE_IMAGE_SIZE,
              },
            }}
          />
        </Stack>
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
