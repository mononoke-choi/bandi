'use client';

import 'client-only';
import { Link } from 'solito/link';
import { Text } from 'tamagui';
import { HEADER_ICON_SIZE } from 'ui/config/constant';
import AlarmSVG from 'ui/src/assets/alarm.svg';
import AppHeader, { AppHeaderProps } from 'ui/src/block/appHeader.web';
import Wip from 'ui/src/template/wip';

const Title: AppHeaderProps['title'] = styles => <Text {...styles}>Home</Text>;
const HeaderRight: AppHeaderProps['headerRight'] = () => (
  <Link href="/notification">
    <AlarmSVG width={HEADER_ICON_SIZE} height={HEADER_ICON_SIZE} />
  </Link>
);

export default function Home() {
  return (
    <>
      <AppHeader title={Title} headerRight={HeaderRight} />
      <Wip />
    </>
  );
}
