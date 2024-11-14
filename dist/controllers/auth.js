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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign_up = void 0;
const user_1 = __importDefault(require("../models/user"));
const handleErrors = (err) => {
    const message_errors = {
        err_message: "error validation",
        errors: {
            email: "",
            password: "",
            username: "",
        },
    };
    if (err.message.includes("User validation failed")) {
        Object.values(err === null || err === void 0 ? void 0 : err.errors).forEach(({ properties }) => {
            if (properties.path === "email") {
                message_errors.errors.email = properties.message;
            }
            if (properties.path === "password") {
                message_errors.errors.password = properties.message;
            }
            if (properties.path === "username") {
                message_errors.errors.username = properties.message;
            }
        });
    }
    return message_errors;
};
const sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const new_user = yield user_1.default.create({ username, email, password });
        res.status(200).json({
            message: "user created",
            data: new_user,
        });
    }
    catch (error) {
        const errorResponse = handleErrors(error);
        res.status(400).json(errorResponse.errors.email || errorResponse.errors.password || errorResponse.errors.username ? errorResponse : { err: error });
    }
});
exports.sign_up = sign_up;
const sign_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
