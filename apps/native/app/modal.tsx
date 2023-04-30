import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationList from 'ui/src/template/notificationList';

export default function ModalScreen() {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Stack.Screen options={{ title: 'Notification' }} />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <NotificationList />
      </SafeAreaView>
    </>
  );
}
