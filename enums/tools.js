const Ajv = require('ajv').default;
import schemasValidation from '../schema/validationSchemes'

const validateWithSchema = function (schemaId, data) {

    if(schemasValidation[schemaId]) {
        return schemasValidation[schemaId](data);
    }

    return false;

};

module.exports = {
    validateWithSchema
};
