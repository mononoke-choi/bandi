import React, { FC } from 'react';
import { DefaultValue } from 'recoil';
import type { RecoilSyncOptions } from 'recoil-sync';
import { RecoilSync } from 'recoil-sync';

import { STORE_KEY } from '../../config/constant';

const WithRecoilSync: FC<RecoilSyncOptions> = ({
  children,
  ...restRecoilSyncProps
}) => {
  return (
    <RecoilSync
      storeKey={STORE_KEY}
      read={itemKey => {
        if (typeof window !== 'undefined') {
          const gainedValue = localStorage.getItem(itemKey);

          if (gainedValue && gainedValue !== 'undefined') {
            return JSON.parse(gainedValue);
          } else {
            return new DefaultValue();
          }
        } else {
          return new DefaultValue();
        }
      }}
      write={({ diff }) => {
        if (typeof window !== 'undefined') {
          for (const [key, value] of diff) {
            try {
              localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
              console.error(error);
            }
          }
        }
      }}
      {...restRecoilSyncProps}
    >
      {children}
    </RecoilSync>
  );
};

export { WithRecoilSync };
