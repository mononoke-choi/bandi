import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { openApp } from './openApp';

dayjs.locale('ko');

beforeAll(async () => {
  await openApp();
});

beforeEach(async () => {
  await device.reloadReactNative();
});
