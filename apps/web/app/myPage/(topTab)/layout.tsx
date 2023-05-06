'use client';

import 'client-only';
import { ReactNode } from 'react';
import { Link } from 'solito/link';
import { Text } from 'tamagui';
import { HEADER_ICON_SIZE } from 'ui/config/constant';
import SettingSVG from 'ui/src/assets/setting.svg';
import AppHeader, { AppHeaderProps } from 'ui/src/block/appHeader.web';
import TopTab from 'ui/src/layout/toptab/index.web';
import MyPageTopTabHeaderTemplate from 'ui/src/template/myPage/index/topTabHeader';

interface LayoutProps {
  children: ReactNode;
}

const Title: AppHeaderProps['title'] = styles => (
  <Text {...styles}>MyPage</Text>
);
const HeaderLeft: AppHeaderProps['headerRight'] = () => (
  <Link href="/myPage/setting">
    <SettingSVG width={HEADER_ICON_SIZE} height={HEADER_ICON_SIZE} />
  </Link>
);

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppHeader title={Title} headerRight={HeaderLeft} />
      <MyPageTopTabHeaderTemplate />
      <TopTab
        links={[
          { href: '/myPage', title: 'My Post' },
          { href: '/myPage/likes', title: 'Likes' },
        ]}
      />
      {children}
    </>
  );
}
