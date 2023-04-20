process.env.TAMAGUI_TARGET = 'native'; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: '../../packages/ui/src/tamagui.config.ts',
          logTimings: true,
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
    ],
  };
};
