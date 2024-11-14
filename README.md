# Small documentation on how to interact with the RESTAPI

- The REST API uses mongodb for Data management
- The mongodb is hosted locally, so please create a database locally and name it recipes, for collections the system will create them automatically.

# SERVER URL : http://localhost:8080
## endpoints
> post : /api/recipes
- posts a new recipe to the database
> get : /api/recipes
- gets all the recipes from the database
> get : /api/recipes/:id
- gets a single recipe by and id
> patch : /api/recipes/:id
- finds a recipe by an ID then updates it
> delete : /api/recipes/:id
- finds a recipe By and an ID then deletes it

# Request body example

```json
{
  "title": "Vegetable Stir-Fry",
  "description": "A quick and healthy vegetable stir-fry with a savory sauce.",
  "category": "Vegetarian",
  "cookingTime": 111,
  "preparationTime": 15,
  "ingredients": [
    "1 tablespoon vegetable oil",
    "1 cup broccoli florets",
    "1 cup sliced bell peppers (red, yellow, green)",
    "1 cup sliced carrots",
    "1/2 cup snow peas",
    "2 cloves garlic, minced",
    "1 tablespoon soy sauce",
    "1 tablespoon oyster sauce",
    "1 teaspoon sesame oil"
  ],
  "instructions": [
    "Heat vegetable oil in a large skillet over medium-high heat.",
    "Add garlic and stir until fragrant.",
    "Add broccoli, bell peppers, carrots, and snow peas, stir-frying for 5-7 minutes until vegetables are tender-crisp.",
    "Add soy sauce, oyster sauce, and sesame oil, stirring to coat vegetables evenly.",
    "Cook for an additional 1-2 minutes, then serve hot."
  ],
  "image": "https://example.com/images/vegetable-stir-fry.jpg"
}
