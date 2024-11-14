import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cookingTime : {
        type : String,
        required : true
    }, 
    preparationTime : {
        type : String,
        required : true
    },
    ingredients : {
        type : [String],
        required : true
    },
    instructions : {
        type : [String],
        required : true
    },
    image : {
        type : String,
        required : true
    }
});

const Recipes = model("recipes", recipeSchema);

export default Recipes  