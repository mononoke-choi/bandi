process.env.TAMAGUI_TARGET = 'native';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui', 'ui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['TAMAGUI_TARGET', 'APP_ENV'],
        },
      ],
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
    ],
  };
};
