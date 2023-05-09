'use client';

import 'client-only';
import { config as configBase } from '@tamagui/config';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from 'next/document';
import { useServerInsertedHTML } from 'next/navigation';
import React, {
  cloneElement,
  ReactNode,
  startTransition,
  useEffect,
} from 'react';
import { AppRegistry } from 'react-native';
import { RecoilRoot } from 'recoil';
import {
  createTamagui,
  Stack,
  TamaguiProvider as TamaguiProviderOG,
} from 'tamagui';
import '@tamagui/polyfill-dev';
import { WithRecoilSync } from 'ui/src/HOC/withRecoilSync';

interface ProviderProps {
  children: ReactNode;
}

const tamaguiConfig = createTamagui({
  ...configBase,
  themeClassNameOnRoot: false,
});

export default function Provider({ children }: ProviderProps) {
  const [theme, setTheme] = useRootTheme();

  AppRegistry.registerComponent('Main', () => Main);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { getStyleElement } = AppRegistry.getApplication('Main');

  useServerInsertedHTML(() =>
    cloneElement(getStyleElement(), { key: 'react-native-stylesheet' }),
  );
  useServerInsertedHTML(() => (
    <style
      key="tamagui-css"
      dangerouslySetInnerHTML={{ __html: tamaguiConfig.getNewCSS() }}
    />
  ));

  useEffect(function logDevOnlyThemeConfig() {
    if (process.env['NODE_ENV'] === 'development') {
      console.log('tamaguiConfig', tamaguiConfig);
    }
  }, []);

  return (
    <NextThemeProvider
      onChangeTheme={next => {
        startTransition(() => {
          setTheme(next as 'dark' | 'light');
        });
      }}
    >
      <TamaguiProviderOG
        config={tamaguiConfig}
        themeClassNameOnRoot
        defaultTheme={theme}
      >
        <RecoilRoot>
          <WithRecoilSync>
            <Stack width="100%">
              {children}
              <Stack
                height="$5"
                key="placeholderOfBottomNavigation"
                pointerEvents="box-none"
              />
            </Stack>
          </WithRecoilSync>
        </RecoilRoot>
      </TamaguiProviderOG>
    </NextThemeProvider>
  );
}
