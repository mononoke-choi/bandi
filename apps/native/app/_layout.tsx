import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useFonts } from 'expo-font';
import { setNotificationHandler } from 'expo-notifications';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';
import { TamaguiProvider, Theme } from 'tamagui';
import { WithRecoilSync } from 'ui/src/HOC/withRecoilSync';
import tamaguiConfig from 'ui/src/tamagui.config';

dayjs.locale('ko');
dayjs.extend(duration);

setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={tamaguiConfig}>
        <Theme name={colorScheme}>
          <RecoilRoot>
            <WithRecoilSync>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="index" />
                <Stack.Screen name="setting" />
                <Stack.Screen
                  name="modal"
                  options={{ presentation: 'modal' }}
                />
              </Stack>
            </WithRecoilSync>
          </RecoilRoot>
        </Theme>
        <StatusBar style="light" backgroundColor="#000000" />
      </TamaguiProvider>
    </ThemeProvider>
  );
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';
