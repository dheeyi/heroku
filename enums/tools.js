const Ajv = require('ajv').default;

const validateWithSchema = function (schema, data) {

    const ajv = new Ajv();

    const validate = ajv.compile(schema);

    const valid = validate(data);

    return valid === true;

};

module.exports = {
    validateWithSchema
};
