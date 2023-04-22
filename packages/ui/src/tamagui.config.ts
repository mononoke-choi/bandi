import { config } from '@tamagui/config';
import { createTamagui } from 'tamagui';

Object.assign(config.media, {
  tiny: { maxWidth: 500 },
  gtTiny: { minWidth: 500 + 1 },
  small: { maxWidth: 620 },
  gtSmall: { minWidth: 620 + 1 },
  medium: { maxWidth: 780 },
  gtMedium: { minWidth: 780 + 1 },
  large: { maxWidth: 900 },
  gtLarge: { minWidth: 900 + 1 },
});

const tamaguiConfig = createTamagui(config);

export type TamaguiConfig = typeof tamaguiConfig;
export default tamaguiConfig;
