import { Tabs } from 'expo-router';
import { ACTIVE_TINT_COLOR } from 'ui/config/constant';
import IndexTabBarHeaderRight from 'ui/src/layout/tabBar';
import {
  MyPageTabBarIcon,
  IndexTabBarIcon,
  ChatTabBarIcon,
  CrewTabBarIcon,
} from 'ui/src/layout/tabBar/icons';
import MyPageTabBarHeaderRight from 'ui/src/layout/tabBar/myPage';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'left',
        tabBarActiveTintColor: ACTIVE_TINT_COLOR,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: IndexTabBarHeaderRight,
          tabBarIcon: IndexTabBarIcon,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="crew"
        options={{
          tabBarIcon: CrewTabBarIcon,
          title: 'Members',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ChatTabBarIcon,
          title: 'Chat',
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          headerRight: MyPageTabBarHeaderRight,
          tabBarIcon: MyPageTabBarIcon,
          title: 'MyPage',
        }}
      />
    </Tabs>
  );
}
