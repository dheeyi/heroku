const Ajv = require('ajv').default;
import schemasValidation from '../schema/validationSchemes'

const validateWithSchema = function (schemaId, data) {

    if(schemasValidation[schemaId]) {
        return schemasValidation[schemaId](data);
    }

    return false;

};

const validateWithSchema2 = function (schema, data) {

    const ajv = new Ajv();

    const validate = ajv.compile(schema);

    const valid = validate(data);

    return valid === true;

};

module.exports = {
    validateWithSchema,
    validateWithSchema2
};
