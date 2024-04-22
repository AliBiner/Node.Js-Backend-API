"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginQueryToUserModel = exports.registerRequestToUserModel = void 0;
const uuid_1 = require("uuid");
function registerRequestToUserModel(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, middleName, lastName, email, password } = request.body;
        const model = {
            id: (0, uuid_1.v4)(),
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            password: null,
            createdDate: new Date(Date.now()).toISOString(),
        };
        return model;
    });
}
exports.registerRequestToUserModel = registerRequestToUserModel;
function loginQueryToUserModel(queryResult) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = {
            id: queryResult[0].user_id,
            firstName: queryResult[0].first_name,
        };
        return model;
    });
}
exports.loginQueryToUserModel = loginQueryToUserModel;
//# sourceMappingURL=authMapper.js.map