import { MMKV } from 'react-native-mmkv';

import { STORE_KEY } from '../../config/constant';

export const MMKVStorage = new MMKV({
  encryptionKey: 'your-encryption-key',
  id: STORE_KEY,
});
