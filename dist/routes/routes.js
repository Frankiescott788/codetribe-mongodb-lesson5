"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbcontrollers_1 = require("../controllers/dbcontrollers");
const routes = (0, express_1.Router)();
routes.post('/api/recipes', dbcontrollers_1.create_recipe);
routes.get('/api/recipes', dbcontrollers_1.get_recipes);
routes.get('/api/recipes/:id', dbcontrollers_1.get_recipe);
routes.patch('/api/recipes/:id', dbcontrollers_1.update_recipe);
routes.delete('/api/recipes/:id', dbcontrollers_1.delete_recipe);
exports.default = routes;