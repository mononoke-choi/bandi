import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';
import { ACTIVE_TINT_COLOR } from 'ui/config/constant';
import IndexTabBarHeaderRight from 'ui/src/layout/tabBar';
import {
  getMyPageTabBarIconOptions,
  getHomeTabIconOptions,
  getChatTabBarIconOptions,
  getCrewTabBarIconOptions,
} from 'ui/src/layout/tabBar/icons';
import MyPageTabBarHeaderRight from 'ui/src/layout/tabBar/myPage';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: theme.gray3.val,
      }}
      screenOptions={{
        headerTitleAlign: 'left',
        tabBarActiveTintColor: ACTIVE_TINT_COLOR,
        tabBarStyle: {
          backgroundColor: theme.gray1.val,
          borderTopColor: theme.gray5.val,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: IndexTabBarHeaderRight,
          ...getHomeTabIconOptions(),
        }}
      />
      <Tabs.Screen
        name="crew"
        options={{
          ...getCrewTabBarIconOptions(),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          ...getChatTabBarIconOptions(),
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          headerRight: MyPageTabBarHeaderRight,
          ...getMyPageTabBarIconOptions(),
        }}
      />
    </Tabs>
  );
}
