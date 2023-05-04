import { getApiNotifications } from 'api';
import { GetApiNotifications200Item } from 'api/src';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationListTemplate from 'ui/src/template/notificationList';

export default function ModalScreen() {
  const [data, setData] = useState<GetApiNotifications200Item[]>([]);

  useEffect(function getNotificationList() {
    (async () => {
      setData(await getApiNotifications());
    })();
  }, []);

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Stack.Screen options={{ title: 'Notification' }} />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <NotificationListTemplate data={data} />
      </SafeAreaView>
    </>
  );
}
