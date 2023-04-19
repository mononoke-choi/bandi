import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';

import { TAB_BAR_ICON_SIZE, ACTIVE_TINT_COLOR } from '../../../config/constant';

function TabBarIcon({
  name,
  focused,
  color,
}: {
  focused: boolean;
  color: string;
  name: ComponentProps<typeof Ionicons>['name'];
}) {
  return (
    <Ionicons
      size={TAB_BAR_ICON_SIZE}
      style={{ marginBottom: -3 }}
      color={focused ? ACTIVE_TINT_COLOR : color}
      name={name}
    />
  );
}

export const IndexTabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon name="ios-home-outline" {...props} />;
export const CrewTabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon name="ios-people-outline" {...props} />;
export const ChatTabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon name="chatbubbles-outline" {...props} />;
export const MyPageTabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => <TabBarIcon name="person-outline" {...props} />;
