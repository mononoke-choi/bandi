import { ReactNode } from 'react';
import BottomNavigation from 'ui/src/block/bottomNavigation.web';

import './reset.css';
import Provider from './provider';

export default function RootLayout({
  modal,
  children,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <Provider>
      {children}
      <BottomNavigation />
      {modal}
    </Provider>
  );
}
