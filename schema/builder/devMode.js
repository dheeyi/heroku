const { exec } = require('child_process');

const devMode = function (devMode) {
    return new Promise((resolve, reject) => {

        if(devMode) {

            exec('ajv compile -s "schema/**/*.json" -o "schema/validationSchemes.js"',
                (errors) => {

                    if (errors) {

                        return reject(new Error('errors'));

                    }

                    return resolve(true);

                });
        } else {

            return resolve(true);
        }

    });
}

module.exports = {
    builder: devMode
};
