import { Inter } from 'next/font/google';
import BottomNavigation from 'ui/src/primitive/bottomNavigation';

import Provider from './provider';
import './reset.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--f-fa',
  weight: ['400', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Provider>
          {children}
          <BottomNavigation />
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