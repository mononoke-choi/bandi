import { Ionicons } from '@expo/vector-icons';
import { Text, XStack, YStack, Stack } from 'tamagui';

export default function MyPage() {
  return (
    <YStack space={true}>
      <XStack gap={10} backgroundColor="#fff" padding="$5">
        <Stack
          borderRadius={100}
          backgroundColor="#ddd"
          width="$5"
          height="$5"
        />
        <YStack justifyContent="space-around">
          <Text fontSize={15}>mononoke.choi</Text>
          <XStack alignItems="center">
            <Ionicons
              name="location-outline"
              size={20}
              color="black"
              style={{ marginLeft: -2 }}
            />
            <Text fontSize={15}>seoul</Text>
          </XStack>
        </YStack>
      </XStack>
      <XStack gap={10} backgroundColor="#fff" padding="$5">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          numquam.
        </Text>
      </XStack>
    </YStack>
  );
}
