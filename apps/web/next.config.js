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

const addSVGRModuleRule = config => {
  // Grab the existing rule that handles SVG imports

  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test?.test?.('.svg'),
  );

  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    },
  );
  // Modify the file loader rule to ignore *.svg, since we have it handled now.

  fileLoaderRule.exclude = /\.svg$/i;
  return config;
};

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let nextConfig = {
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
    webpack: config => {
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ];

      addSVGRModuleRule(config);

      return config;
    },
  };

  for (const plugin of plugins) {
    nextConfig = {
      ...nextConfig,
      ...plugin(nextConfig),
    };
  }

  return nextConfig;
};
