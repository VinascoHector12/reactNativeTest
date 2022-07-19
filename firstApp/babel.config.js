module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], //Se debe agregar para hacer uso de DrawerNavigator - expo r -c borra cache
  };
};
