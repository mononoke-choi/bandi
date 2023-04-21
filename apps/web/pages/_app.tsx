import '../styles/globals.css';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import Head from 'next/head';
import Script from 'next/script';
import React, { ReactNode, startTransition } from 'react';
import type { SolitoAppProps } from 'solito';
import { TamaguiProvider } from 'tamagui';

import tamaguiConfig from '../tamagui.config';

function InnerApp({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useRootTheme();

  return (
    <NextThemeProvider
      onChangeTheme={next => {
        startTransition(() => {
          setTheme(next);
        });
      }}
    >
      <TamaguiProvider
        config={tamaguiConfig}
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={theme}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
}

export default function App({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>bandi</title>
      </Head>
      <Script
        id="tamagui-animations-mount"
        key="tamagui-animations-mount"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />
      <InnerApp>
        <Component {...pageProps} />
      </InnerApp>
    </>
  );
}
