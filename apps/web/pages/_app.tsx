import '../styles/globals.css';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useMemo } from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from 'ui/src/tamagui.config';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();
  // memo to avoid re-render on dark/light change

  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps, Component]);
  // because we do our custom getCSS() above, we disableInjectCSS here

  return (
    <>
      <Head>
        <title>bandi</title>
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider
          config={tamaguiConfig}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}
