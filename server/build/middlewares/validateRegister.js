"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validator_1 = require("../utilities/validator");
const validateRegister = (req, res, next) => {
    const { formData } = req.body;
    const { error } = validator_1.schema.validate(formData, {
        abortEarly: false,
    });
    if (error) {
        const errorsFormated = error.details.map((error) => {
            var _a;
            return ({
                message: error.message,
                field: (_a = error.context) === null || _a === void 0 ? void 0 : _a.key,
            });
        });
        return res.status(401).json(errorsFormated);
    }
    next();
};
exports.validateRegister = validateRegister;
