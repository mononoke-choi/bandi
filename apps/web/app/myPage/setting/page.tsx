'use client';

import 'client-only';
import { Text } from 'tamagui';
import AppHeader, {
  AppHeaderProps,
  HeaderBackButton,
} from 'ui/src/primitive/appHeader';
import SettingTemplate from 'ui/src/template/myPage/setting';

const Title: AppHeaderProps['title'] = styles => (
  <Text {...styles}>Setting</Text>
);
const HeaderLeft: AppHeaderProps['headerRight'] = () => (
  <HeaderBackButton fallbackUrl="/"></HeaderBackButton>
);

export default function Page() {
  return (
    <>
      <AppHeader title={Title} headerLeft={HeaderLeft} />
      <SettingTemplate />
    </>
  );
}
