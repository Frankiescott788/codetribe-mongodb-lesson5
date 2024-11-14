import { Router } from "express";
import { create_recipe, delete_recipe, get_recipe, get_recipes, update_recipe } from "../controllers/dbcontrollers";

const routes = Router();

routes.post('/api/recipes', create_recipe);
routes.get('/api/recipes', get_recipes);
routes.get('/api/recipes/:id', get_recipe);
routes.patch('/api/recipes/:id', update_recipe);
routes.delete('/api/recipes/:id', delete_recipe);


export default routes