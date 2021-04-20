const validationSchemesPlugin = require('./schema/builder/productionModePlugin');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new validationSchemesPlugin())

        return config
    },
};

