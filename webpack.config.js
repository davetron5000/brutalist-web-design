module.exports = function(env,argv) {
  if (env === undefined) {
    env = "development"
  }
  return require(`./config/webpack/${env}.js`);
};
