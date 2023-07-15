import { TopTabs } from '@bacons/expo-router-top-tabs';
import { ACTIVE_TINT_COLOR, MyPageTopTabHeaderTemplate } from 'ui';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <TopTabs
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: ACTIVE_TINT_COLOR,
        },
      }}
    >
      <TopTabs.Header>
        <MyPageTopTabHeaderTemplate />
      </TopTabs.Header>
      <TopTabs.Screen
        name="index"
        options={{
          title: 'My post',
        }}
      />
      <TopTabs.Screen
        name="likes"
        options={{
          title: 'Likes',
        }}
      />
    </TopTabs>
  );
}
