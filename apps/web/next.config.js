/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.NODE_ENV === 'production',
    openAnalyzer: process.env.ANALYZE === 'true',
  }),
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', 'ui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === 'development',
    enableCSSOptimizations: false,
    disableFontSupport: true,
    useReactNativeWebLite: true,
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
    ],
  }),
];

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      'ui',
    ],
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    experimental: {
      appDir: true,
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
