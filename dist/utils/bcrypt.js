"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encodePassword = void 0;
const bcrypt = require("bcrypt");
const encodePassword = (rawPassword) => {
    try {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(rawPassword, salt);
    }
    catch (error) {
        console.error('Error encoding password: ', error);
    }
};
exports.encodePassword = encodePassword;
const comparePassword = (rawPassword, hash) => {
    try {
        return bcrypt.compareSync(rawPassword, hash);
    }
    catch (error) {
        console.error('Error decoding password: ', error);
    }
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=bcrypt.js.map