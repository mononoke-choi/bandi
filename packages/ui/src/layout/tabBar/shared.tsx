import { Tabs } from 'expo-router';
import React, { FC } from 'react';
import type { SvgProps } from 'react-native-svg';
import { useTheme } from 'tamagui';

import { ACTIVE_TINT_COLOR } from '../../../config/constant';
import ChatSVG from '../../assets/chat.svg';
import CrewSVG from '../../assets/crew.svg';
import HomeSVG from '../../assets/home.svg';
import MyPageSVG from '../../assets/myPage.svg';

type TabBarIconReturn = Required<
  Pick<
    NonNullable<Parameters<typeof Tabs.Screen>[0]['options']>,
    'tabBarIcon' | 'title'
  >
> & {
  href?: string;
  activation?: (segment: string) => boolean;
};
export type TabBarIcon = () => TabBarIconReturn;

function getTabBarIcon(SVG: FC<SvgProps>) {
  return function TabBarIcon({
    size,
    focused,
  }: Omit<Parameters<TabBarIconReturn['tabBarIcon']>[0], 'color'>) {
    const theme = useTheme();

    return (
      <SVG
        width={size}
        height={size}
        color={focused ? ACTIVE_TINT_COLOR : theme.gray11.val}
      />
    );
  };
}

export const getSharedHomeTabIconOptions: TabBarIcon = () => {
  return {
    tabBarIcon: getTabBarIcon(HomeSVG),
    title: 'Home',
  };
};

export const getSharedCrewTabBarIconOptions: TabBarIcon = () => {
  return {
    tabBarIcon: getTabBarIcon(CrewSVG),
    title: 'Crew',
  };
};

export const getSharedChatTabBarIconOptions: TabBarIcon = () => {
  return {
    tabBarIcon: getTabBarIcon(ChatSVG),
    title: 'Chat',
  };
};

export const getSharedMyPageTabBarIconOptions: TabBarIcon = () => {
  return {
    tabBarIcon: getTabBarIcon(MyPageSVG),
    title: 'MyPage',
  };
};
