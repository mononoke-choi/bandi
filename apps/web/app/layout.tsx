import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import BottomNavigation from 'ui/src/block/bottomNavigation.web';

import Provider from './provider';
import './reset.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--f-fa',
  weight: ['400', '700', '800'],
});

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Provider>
          {children}
          <BottomNavigation />
          {modal}
        </Provider>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: 'Bandi',
    template: `%s | Bandi`,
  },
};
