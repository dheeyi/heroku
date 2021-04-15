"use strict";
exports.payloadCity = validate20;
const schema22 = {
    "$id": "payloadCity",
    "type": "object",
    "additionalProperties": false,
    "required": ["city"],
    "properties": {"city": {"type": "string", "enum": ["LPZ"]}}
};
const func0 = require("ajv/dist/runtime/equal").default;

function validate20(data, {instancePath = "", parentData, parentDataProperty, rootData = data} = {}) {/*# sourceURL="payloadCity" */
    ;let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if ((data.city === undefined) && (missing0 = "city")) {
                validate20.errors = [{
                    instancePath,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {missingProperty: missing0},
                    message: "must have required property '" + missing0 + "'"
                }];
                return false;
            } else {
                const _errs1 = errors;
                for (const key0 in data) {
                    if (!(key0 === "city")) {
                        validate20.errors = [{
                            instancePath,
                            schemaPath: "#/additionalProperties",
                            keyword: "additionalProperties",
                            params: {additionalProperty: key0},
                            message: "must NOT have additional properties"
                        }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.city !== undefined) {
                        let data0 = data.city;
                        if (typeof data0 !== "string") {
                            validate20.errors = [{
                                instancePath: instancePath + "/city",
                                schemaPath: "#/properties/city/type",
                                keyword: "type",
                                params: {type: "string"},
                                message: "must be string"
                            }];
                            return false;
                        }
                        if (!(data0 === "LPZ")) {
                            validate20.errors = [{
                                instancePath: instancePath + "/city",
                                schemaPath: "#/properties/city/enum",
                                keyword: "enum",
                                params: {allowedValues: schema22.properties.city.enum},
                                message: "must be equal to one of the allowed values"
                            }];
                            return false;
                        }
                    }
                }
            }
        } else {
            validate20.errors = [{
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {type: "object"},
                message: "must be object"
            }];
            return false;
        }
    }
    validate20.errors = vErrors;
    return errors === 0;
}

exports.TermsAndConditions = validate21;
const schema23 = {
    "$id": "TermsAndConditions",
    "type": "object",
    "required": ["creditCard", "height", "weight", "email", "cellphone", "consolidateData"],
    "additionalProperties": false,
    "properties": {
        "creditCard": {
            "type": "object",
            "required": ["order", "identification"],
            "additionalProperties": false,
            "properties": {
                "order": {"type": "integer", "minimum": 0},
                "identification": {"type": "string", "minLength": 1}
            }
        },
        "height": {"type": "number", "minimum": 0},
        "weight": {"type": "number", "minimum": 0},
        "email": {"type": "string", "minLength": 2},
        "cellphone": {"type": "string", "minLength": 2},
        "consolidateData": {"type": "object"}
    }
};
const func9 = require("ajv/dist/runtime/ucs2length").default;

function validate21(data, {instancePath = "", parentData, parentDataProperty, rootData = data} = {}) {/*# sourceURL="TermsAndConditions" */
    ;let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if (((((((data.creditCard === undefined) && (missing0 = "creditCard")) || ((data.height === undefined) && (missing0 = "height"))) || ((data.weight === undefined) && (missing0 = "weight"))) || ((data.email === undefined) && (missing0 = "email"))) || ((data.cellphone === undefined) && (missing0 = "cellphone"))) || ((data.consolidateData === undefined) && (missing0 = "consolidateData"))) {
                validate21.errors = [{
                    instancePath,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {missingProperty: missing0},
                    message: "must have required property '" + missing0 + "'"
                }];
                return false;
            } else {
                const _errs1 = errors;
                for (const key0 in data) {
                    if (!((((((key0 === "creditCard") || (key0 === "height")) || (key0 === "weight")) || (key0 === "email")) || (key0 === "cellphone")) || (key0 === "consolidateData"))) {
                        validate21.errors = [{
                            instancePath,
                            schemaPath: "#/additionalProperties",
                            keyword: "additionalProperties",
                            params: {additionalProperty: key0},
                            message: "must NOT have additional properties"
                        }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.creditCard !== undefined) {
                        let data0 = data.creditCard;
                        const _errs2 = errors;
                        if (errors === _errs2) {
                            if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                                let missing1;
                                if (((data0.order === undefined) && (missing1 = "order")) || ((data0.identification === undefined) && (missing1 = "identification"))) {
                                    validate21.errors = [{
                                        instancePath: instancePath + "/creditCard",
                                        schemaPath: "#/properties/creditCard/required",
                                        keyword: "required",
                                        params: {missingProperty: missing1},
                                        message: "must have required property '" + missing1 + "'"
                                    }];
                                    return false;
                                } else {
                                    const _errs4 = errors;
                                    for (const key1 in data0) {
                                        if (!((key1 === "order") || (key1 === "identification"))) {
                                            validate21.errors = [{
                                                instancePath: instancePath + "/creditCard",
                                                schemaPath: "#/properties/creditCard/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: {additionalProperty: key1},
                                                message: "must NOT have additional properties"
                                            }];
                                            return false;
                                            break;
                                        }
                                    }
                                    if (_errs4 === errors) {
                                        if (data0.order !== undefined) {
                                            let data1 = data0.order;
                                            const _errs5 = errors;
                                            if (!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))) {
                                                validate21.errors = [{
                                                    instancePath: instancePath + "/creditCard/order",
                                                    schemaPath: "#/properties/creditCard/properties/order/type",
                                                    keyword: "type",
                                                    params: {type: "integer"},
                                                    message: "must be integer"
                                                }];
                                                return false;
                                            }
                                            if (errors === _errs5) {
                                                if ((typeof data1 == "number") && (isFinite(data1))) {
                                                    if (data1 < 0 || isNaN(data1)) {
                                                        validate21.errors = [{
                                                            instancePath: instancePath + "/creditCard/order",
                                                            schemaPath: "#/properties/creditCard/properties/order/minimum",
                                                            keyword: "minimum",
                                                            params: {comparison: ">=", limit: 0},
                                                            message: "must be >= 0"
                                                        }];
                                                        return false;
                                                    }
                                                }
                                            }
                                            var valid1 = _errs5 === errors;
                                        } else {
                                            var valid1 = true;
                                        }
                                        if (valid1) {
                                            if (data0.identification !== undefined) {
                                                let data2 = data0.identification;
                                                const _errs7 = errors;
                                                if (errors === _errs7) {
                                                    if (typeof data2 === "string") {
                                                        if (func9(data2) < 1) {
                                                            validate21.errors = [{
                                                                instancePath: instancePath + "/creditCard/identification",
                                                                schemaPath: "#/properties/creditCard/properties/identification/minLength",
                                                                keyword: "minLength",
                                                                params: {limit: 1},
                                                                message: "must NOT have fewer than 1 characters"
                                                            }];
                                                            return false;
                                                        }
                                                    } else {
                                                        validate21.errors = [{
                                                            instancePath: instancePath + "/creditCard/identification",
                                                            schemaPath: "#/properties/creditCard/properties/identification/type",
                                                            keyword: "type",
                                                            params: {type: "string"},
                                                            message: "must be string"
                                                        }];
                                                        return false;
                                                    }
                                                }
                                                var valid1 = _errs7 === errors;
                                            } else {
                                                var valid1 = true;
                                            }
                                        }
                                    }
                                }
                            } else {
                                validate21.errors = [{
                                    instancePath: instancePath + "/creditCard",
                                    schemaPath: "#/properties/creditCard/type",
                                    keyword: "type",
                                    params: {type: "object"},
                                    message: "must be object"
                                }];
                                return false;
                            }
                        }
                        var valid0 = _errs2 === errors;
                    } else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.height !== undefined) {
                            let data3 = data.height;
                            const _errs9 = errors;
                            if (errors === _errs9) {
                                if ((typeof data3 == "number") && (isFinite(data3))) {
                                    if (data3 < 0 || isNaN(data3)) {
                                        validate21.errors = [{
                                            instancePath: instancePath + "/height",
                                            schemaPath: "#/properties/height/minimum",
                                            keyword: "minimum",
                                            params: {comparison: ">=", limit: 0},
                                            message: "must be >= 0"
                                        }];
                                        return false;
                                    }
                                } else {
                                    validate21.errors = [{
                                        instancePath: instancePath + "/height",
                                        schemaPath: "#/properties/height/type",
                                        keyword: "type",
                                        params: {type: "number"},
                                        message: "must be number"
                                    }];
                                    return false;
                                }
                            }
                            var valid0 = _errs9 === errors;
                        } else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.weight !== undefined) {
                                let data4 = data.weight;
                                const _errs11 = errors;
                                if (errors === _errs11) {
                                    if ((typeof data4 == "number") && (isFinite(data4))) {
                                        if (data4 < 0 || isNaN(data4)) {
                                            validate21.errors = [{
                                                instancePath: instancePath + "/weight",
                                                schemaPath: "#/properties/weight/minimum",
                                                keyword: "minimum",
                                                params: {comparison: ">=", limit: 0},
                                                message: "must be >= 0"
                                            }];
                                            return false;
                                        }
                                    } else {
                                        validate21.errors = [{
                                            instancePath: instancePath + "/weight",
                                            schemaPath: "#/properties/weight/type",
                                            keyword: "type",
                                            params: {type: "number"},
                                            message: "must be number"
                                        }];
                                        return false;
                                    }
                                }
                                var valid0 = _errs11 === errors;
                            } else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.email !== undefined) {
                                    let data5 = data.email;
                                    const _errs13 = errors;
                                    if (errors === _errs13) {
                                        if (typeof data5 === "string") {
                                            if (func9(data5) < 2) {
                                                validate21.errors = [{
                                                    instancePath: instancePath + "/email",
                                                    schemaPath: "#/properties/email/minLength",
                                                    keyword: "minLength",
                                                    params: {limit: 2},
                                                    message: "must NOT have fewer than 2 characters"
                                                }];
                                                return false;
                                            }
                                        } else {
                                            validate21.errors = [{
                                                instancePath: instancePath + "/email",
                                                schemaPath: "#/properties/email/type",
                                                keyword: "type",
                                                params: {type: "string"},
                                                message: "must be string"
                                            }];
                                            return false;
                                        }
                                    }
                                    var valid0 = _errs13 === errors;
                                } else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.cellphone !== undefined) {
                                        let data6 = data.cellphone;
                                        const _errs15 = errors;
                                        if (errors === _errs15) {
                                            if (typeof data6 === "string") {
                                                if (func9(data6) < 2) {
                                                    validate21.errors = [{
                                                        instancePath: instancePath + "/cellphone",
                                                        schemaPath: "#/properties/cellphone/minLength",
                                                        keyword: "minLength",
                                                        params: {limit: 2},
                                                        message: "must NOT have fewer than 2 characters"
                                                    }];
                                                    return false;
                                                }
                                            } else {
                                                validate21.errors = [{
                                                    instancePath: instancePath + "/cellphone",
                                                    schemaPath: "#/properties/cellphone/type",
                                                    keyword: "type",
                                                    params: {type: "string"},
                                                    message: "must be string"
                                                }];
                                                return false;
                                            }
                                        }
                                        var valid0 = _errs15 === errors;
                                    } else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.consolidateData !== undefined) {
                                            let data7 = data.consolidateData;
                                            const _errs17 = errors;
                                            if (!(data7 && typeof data7 == "object" && !Array.isArray(data7))) {
                                                validate21.errors = [{
                                                    instancePath: instancePath + "/consolidateData",
                                                    schemaPath: "#/properties/consolidateData/type",
                                                    keyword: "type",
                                                    params: {type: "object"},
                                                    message: "must be object"
                                                }];
                                                return false;
                                            }
                                            var valid0 = _errs17 === errors;
                                        } else {
                                            var valid0 = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            validate21.errors = [{
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {type: "object"},
                message: "must be object"
            }];
            return false;
        }
    }
    validate21.errors = vErrors;
    return errors === 0;
}
