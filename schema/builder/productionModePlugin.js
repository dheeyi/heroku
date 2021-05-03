const { exec } = require('child_process');

class ProductionModePlugin {
    apply(compiler) {

        compiler.hooks.beforeRun.tapPromise(
            'ProductionModePlugin',
            () => {

            return new Promise((resolve, reject) => {

                exec(
                    'ajv compile -s "schema/**/*.json" -o "schema/validationSchemes.js"',
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

