import { Request, Response } from "express";
import Recipes from "../models/recipes";
import mongoose from "mongoose";

const create_recipe = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      category,
      cookingTime,
      preparationTime,
      ingredients,
      instructions,
      image,
    } = req.body;

    const recipe = await Recipes.create({
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
        message : "recipe created",
        data : recipe
    })

  } catch (error) {
    res.status(500).json(error);
  }
};

const get_recipes = async (req : Request, res : any) => {
    try {
        const recipes = await Recipes.find({}).sort({ createdAt : -1 });

        if(recipes.length === 0) {
            return res.status(200).json({ message : "No recipes yet" })
        }

        res.status(200).json({
            message : "Recipes retrived successfully",
            data : recipes
        })
    } catch (error) {
        res.status(500).json({err : error})
    }
}

const get_recipe = async (req : Request, res : Response) : Promise<any>=> {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({err : "Invalid id"})
        }
        const recipe = await Recipes.findById(id);
        if(!recipe) {
            return res.status(404).json({err : "Recipe not found"})
        }

        res.status(200).json({
            message : "Recipe retrived successfully",
            data : recipe
        })
    } catch (error) {
        res.status(500).json({err : error})
    }
}

const update_recipe = async (req : Request, res : Response) : Promise<any> => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({err : "Invalid Id"})
        }
        const find_then_update = await Recipes.findByIdAndUpdate(id, {
            ...req.body
        }, { new : true });

        if(!find_then_update) {
            return res.status(404).json({err : "Recipe not found"})
        }

        res.status(200).json({
            message : "Recipe updated successfully",
            data : find_then_update
        })
    } catch (error) {
        res.status(500).json({err : error})
    }
}

const delete_recipe = async (req : Request, res : Response) : Promise<any> => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({err : "invalid id"})
        }

        const find_then_delete = await Recipes.findByIdAndDelete(id);

        if(!find_then_delete) {
            return res.status(404).json({err : "Recipe not found"});
        }

        res.status(200).json({
            message : "Recipe deleted successfully"
        })
    } catch (error) {
        res.status(500).json({err : error})
    }
}

export { create_recipe, get_recipes, get_recipe, update_recipe, delete_recipe };        