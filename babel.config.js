module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@core': './src/core',
            '@modules': './src/modules',
          },
        },
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
      }]
    ],
  };
};
