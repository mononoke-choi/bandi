import { config } from '@tamagui/config';
import { createTamagui } from 'tamagui';

const tamaguiConfig = createTamagui(config);

export type TamaguiConfig = typeof tamaguiConfig;
export default tamaguiConfig;
