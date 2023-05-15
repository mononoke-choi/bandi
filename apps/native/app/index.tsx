import { Link } from 'solito/link';
import { Stack, YStack, Text } from 'tamagui';

export default function Page() {
  return (
    <YStack alignItems="center" justifyContent="center" flex={1} space="$2">
      <Text fontSize="$11" fontFamily="$body">
        🐶
      </Text>
      <Link href="/home">
        <Stack backgroundColor="$green8" borderRadius={10}>
          <Text
            testID="signInButton"
            fontFamily="$body"
            fontSize="$7"
            color="$gray1"
            paddingHorizontal="$6"
            paddingVertical="$2"
          >
            Sign In
          </Text>
        </Stack>
      </Link>
    </YStack>
  );
}
