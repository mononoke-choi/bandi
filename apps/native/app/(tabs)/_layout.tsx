import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';
import { ACTIVE_TINT_COLOR, HEADER_EDGE_SPACE_TOKEN } from 'ui/config/constant';
import { HomeHeaderRight } from 'ui/src/layout/appHeader/home';
import MyPageHeaderRight from 'ui/src/layout/appHeader/myPage';
import {
  getMyPageTabBarIconOptions,
  getHomeTabIconOptions,
  getChatTabBarIconOptions,
  getCrewTabBarIconOptions,
} from 'ui/src/layout/tabBar/icons';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: theme.gray3.val,
      }}
      screenOptions={{
        headerRightContainerStyle: { paddingRight: HEADER_EDGE_SPACE_TOKEN },
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
        name="home"
        options={{
          headerRight: HomeHeaderRight,
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
          headerRight: MyPageHeaderRight,
          ...getMyPageTabBarIconOptions(),
        }}
      />
    </Tabs>
  );
}
