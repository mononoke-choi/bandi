import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { YStack, Text } from 'tamagui';

export default function ModalScreen() {
  return (
    <YStack justifyContent="center" alignItems="center" flex={1} space={true}>
      <Stack.Screen options={{ title: 'Notification' }} />
      <Text>Notification history</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </YStack>
  );
}
