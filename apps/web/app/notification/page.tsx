'use client';

import 'client-only';
import { Text } from 'tamagui';
import AppHeader, {
  AppHeaderProps,
  HeaderBackButton,
} from 'ui/src/primitive/appHeader';
import NotificationList from 'ui/src/template/notificationList';

const Title: AppHeaderProps['title'] = styles => (
  <Text {...styles}>Notification</Text>
);
const HeaderLeft: AppHeaderProps['headerRight'] = () => (
  <HeaderBackButton fallbackUrl="/"></HeaderBackButton>
);

export default function Page() {
  return (
    <>
      <AppHeader title={Title} headerLeft={HeaderLeft} />
      <NotificationList />
    </>
  );
}
