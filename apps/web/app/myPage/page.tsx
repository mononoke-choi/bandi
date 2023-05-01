'use client';

import 'client-only';
import { Link } from 'solito/link';
import { Text } from 'tamagui';
import { HEADER_ICON_SIZE } from 'ui/config/constant';
import SettingSVG from 'ui/src/assets/setting.svg';
import AppHeader, { AppHeaderProps } from 'ui/src/block/appHeader.web';
import MyPageTemplate from 'ui/src/template/myPage';

const Title: AppHeaderProps['title'] = styles => (
  <Text {...styles}>MyPage</Text>
);
const HeaderLeft: AppHeaderProps['headerRight'] = () => (
  <Link href="/myPage/setting">
    <SettingSVG width={HEADER_ICON_SIZE} height={HEADER_ICON_SIZE} />
  </Link>
);
export default function Page() {
  return (
    <>
      <AppHeader title={Title} headerRight={HeaderLeft} />
      <MyPageTemplate />
    </>
  );
}
