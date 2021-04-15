import schemasValidation from '../validate_schema'

const validateWithSchema = function (schemaId, data) {

    return schemasValidation[schemaId](data);

};

const validateWithSchema2 = function (schema, data) {

    const ajv = new Ajv();

    const validate = ajv.compile(schema);

    const valid = validate(data);

    return valid === true;

};

module.exports = {
    validateWithSchema
};
