const { exec } = require('child_process');

class ProductionModePlugin {
    apply(compiler) {

        compiler.hooks.beforeRun.tapPromise('ProductionModePlugin', () => {

            return new Promise((resolve, reject) => {

                exec('ajv compile -s "schema/*/schema*.json" -o "schema/validationSchemes.js"',
                    (errors) => {

                        if (errors) {

                            return reject(new Error('errors'));
                        }

                        return resolve(true);

                    });

            });
        });
    }
}

module.exports = ProductionModePlugin;

