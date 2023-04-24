'use client';

import 'client-only';
import { config as configBase } from '@tamagui/config';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from 'next/document';
import { useServerInsertedHTML } from 'next/navigation';
import React, { ReactNode, startTransition } from 'react';
import { AppRegistry } from 'react-native';
import { createTamagui, TamaguiProvider as TamaguiProviderOG } from 'tamagui';
import '@tamagui/polyfill-dev';

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

  useServerInsertedHTML(() => getStyleElement());
  useServerInsertedHTML(() => (
    <style
      key="tamagui-css"
      dangerouslySetInnerHTML={{ __html: tamaguiConfig.getCSS() }}
    />
  ));

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
        {children}
      </TamaguiProviderOG>
    </NextThemeProvider>
  );
}
