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
exports.delete_recipe = exports.update_recipe = exports.get_recipe = exports.get_recipes = exports.create_recipe = void 0;
const recipes_1 = __importDefault(require("../models/recipes"));
const mongoose_1 = __importDefault(require("mongoose"));
const create_recipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, category, cookingTime, preparationTime, ingredients, instructions, image, } = req.body;
        const recipe = yield recipes_1.default.create({
            title,
            description,
            category,
            cookingTime,
            preparationTime,
            ingredients,
            instructions,
            image,
        });
        res.status(201).json({
            message: "recipe created",
            data: recipe
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.create_recipe = create_recipe;
const get_recipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipes_1.default.find({}).sort({ createdAt: -1 });
        if (recipes.length === 0) {
            return res.status(200).json({ message: "No recipes yet" });
        }
        res.status(200).json({
            message: "Recipes retrived successfully",
            data: recipes
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.get_recipes = get_recipes;
const get_recipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ err: "Invalid id" });
        }
        const recipe = yield recipes_1.default.findById(id);
        if (!recipe) {
            return res.status(404).json({ err: "Recipe not found" });
        }
        res.status(200).json({
            message: "Recipe retrived successfully",
            data: recipe
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.get_recipe = get_recipe;
const update_recipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ err: "Invalid Id" });
        }
        const find_then_update = yield recipes_1.default.findByIdAndUpdate(id, Object.assign({}, req.body), { new: true });
        if (!find_then_update) {
            return res.status(404).json({ err: "Recipe not found" });
        }
        res.status(200).json({
            message: "Recipe updated successfully",
            data: find_then_update
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.update_recipe = update_recipe;
const delete_recipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ err: "invalid id" });
        }
        const find_then_delete = yield recipes_1.default.findByIdAndDelete(id);
        if (!find_then_delete) {
            return res.status(404).json({ err: "Recipe not found" });
        }
        res.status(200).json({
            message: "Recipe deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.delete_recipe = delete_recipe;
