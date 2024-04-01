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
exports.getUserByIdService = exports.getUsersService = exports.createUserService = void 0;
const users = [{
        id: 1,
        name: "Jorge V",
        email: "jorge@mail.com",
        active: true
    }
];
let id = 2;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active,
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.createUserService = createUserService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userWanted = users.find((user) => user.id === id);
    return userWanted;
});
exports.getUserByIdService = getUserByIdService;
