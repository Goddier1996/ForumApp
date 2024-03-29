module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',
        {
          envName: [
            'REACT_APP_API',
            'TYPE_DATA_UPLOAD_CLOUNDINARY',
            'URL_DATA_UPLOAD_CLOUNDINARY'
          ],
          moduleName: '@env',
          path: '.env.local',
        },]
    ]
  };
};


