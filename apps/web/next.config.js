/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin');
const { join } = require('path');

const plugins = [
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', 'ui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === 'development',
    enableCSSOptimizations: false,
    disableFontSupport: false,
    useReactNativeWebLite: true,
    shouldExtract: path => {
      if (path.includes(join('packages', 'app'))) {
        return true;
      }
    },
  }),
];

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    webpack(webpackConfig) {
      // for testing prod faster
      webpackConfig.optimization.minimize = false;
      return webpackConfig;
    },
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
    ],
    experimental: {},
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
