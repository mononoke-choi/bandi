import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC } from 'react';
import { DefaultValue } from 'recoil';
import { RecoilSync } from 'recoil-sync';
import type { RecoilSyncOptions } from 'recoil-sync';

import { STORE_KEY } from '../../config/constant';

const WithRecoilSync: FC<RecoilSyncOptions> = ({
  children,
  ...restRecoilSyncProps
}) => {
  return (
    <RecoilSync
      storeKey={STORE_KEY}
      read={async itemKey => {
        const gainedValue = await AsyncStorage.getItem(itemKey);

        if (gainedValue) {
          return JSON.parse(gainedValue);
        } else {
          return new DefaultValue();
        }
      }}
      write={({ diff }) => {
        for (const [key, value] of diff) {
          try {
            AsyncStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
            console.error(error);
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
