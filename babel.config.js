module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',
        {
          envName: 'REACT_APP_API',
          moduleName: '@env',
          path: '.env.local',
        },]
    ]
  };
};


