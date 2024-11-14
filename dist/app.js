"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/recipes");
const db = mongoose_1.default.connection;
db.on("error", () => console.log("Failed to connect to mongodb"));
db.once("open", () => {
    app.listen(8080, () => {
        console.log("server up, running and connected to Database");
        app.use(routes_1.default);
    });
});
