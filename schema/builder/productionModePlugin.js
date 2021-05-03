const { exec } = require('child_process');

class ProductionModePlugin {
    apply(compiler) {

        compiler.hooks.beforeRun.tapPromise(
            'ProductionModePlugin', 
            () => {

            return new Promise((resolve, reject) => {

                console.log('pluginnn');
                exec(
                    'ajv compile -s "schema/source/*/*.json" -o "schema/validationSchemes.js"',
                    (errors) => {

                        if (errors) {

                            reject(new Error('errors'));
                        }

                        resolve(true);

                    });

            });
        });
    }
}

module.exports = ProductionModePlugin;

