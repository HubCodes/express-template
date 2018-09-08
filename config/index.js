const configProto = {
  appName: 'example',
  database: {
    name: process.env.DB_NAME,
    id: process.env.DB_ID,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_KIND,
  },
};

const debugConfig = {
  port: process.env.DEBUG_PORT || 8080,
  private: {
    key: process.env.DEBUG_KEY || '3xeDQzI910XgYT3A',
  },
};

const productConfig = {
  port: process.env.PORT || 80,
  private: {
    key: process.env.KEY || '3xeDQzI910XgYT3A',
  },
};

const init = function init() {
  const debug = Object.setPrototypeOf(debugConfig, configProto);
  const product = Object.setPrototypeOf(productConfig, configProto);
  return { debug, product };
};

module.exports = init;
