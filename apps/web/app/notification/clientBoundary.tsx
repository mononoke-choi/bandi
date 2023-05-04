'use client';

import 'client-only';
import { Text } from 'tamagui';
import AppHeader, {
  HeaderBackButton,
  AppHeaderProps,
} from 'ui/src/block/appHeader.web';

const Title: AppHeaderProps['title'] = styles => (
  <Text {...styles}>Notification</Text>
);
const HeaderLeft: AppHeaderProps['headerRight'] = () => (
  <HeaderBackButton fallbackUrl="/"></HeaderBackButton>
);

export default function ClientBoundary() {
  return <AppHeader title={Title} headerLeft={HeaderLeft} />;
}
