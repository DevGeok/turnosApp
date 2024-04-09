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
exports.userLogin = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userServices_1 = require("../services/userServices");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, userServices_1.createUserService)(req.body);
    res.status(201).json({ message: "User created successfully", newUser: newUser });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userServices_1.getUsersService)();
    res.status(201).json(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const userWanted = yield (0, userServices_1.getUserByIdService)(userId);
    res.status(201).json({ message: "Usuario Encontrado", userWanted: userWanted });
});
exports.getUserById = getUserById;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ message: "Inicio de sesión Exitosa" });
});
exports.userLogin = userLogin;
