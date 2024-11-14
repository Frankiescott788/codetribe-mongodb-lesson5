"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cookingTime: {
        type: String,
        required: true
    },
    preparationTime: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const Recipes = (0, mongoose_1.model)("recipes", recipeSchema);
exports.default = Recipes;
