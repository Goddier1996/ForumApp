module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',
        {
          envName: 'EXPO_PUBLIC_API_URL',
          moduleName: '@env',
          path: '.env',
        },]
    ]
  };
};
