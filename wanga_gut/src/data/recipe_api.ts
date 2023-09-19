import {categories, recipes, ingredients} from './data';

export function getRecipes() {
  return recipes;
}

export function getRecipe(recipeId: number) {
  return recipes.find(recipe => recipe.recipeId === recipeId);
}

export function getCategoryName(categoryId: number) {
  return (
    categories.find(category => category.id === categoryId)?.name ?? 'Unknown'
  );
}

export function getPreparationTime(time: number | string) {
  return `${time} minutes`;
}

export function getIngredients(recipeId: number) {
  const recipe = recipes.find(r => r.recipeId === recipeId);
  if (!recipe) {
    return [];
  }
  const ingredientIds = recipe.ingredients.map(ing => Number(ing[0]));
  return ingredients.filter(ing => ingredientIds.includes(ing.ingredientId));
}

export function getIngredient(ingredientId: number) {
  return ingredients.find(ing => ing.ingredientId === ingredientId);
}

export function getMeasurement(recipeId: number, ingredientId: number) {
  const recipe = recipes.find(r => r.recipeId === recipeId);
  if (!recipe) {
    return '';
  }
  const ingredient = recipe.ingredients.find(
    ing => Number(ing[0]) === ingredientId,
  );
  return ingredient ? String(ingredient[1]) : '';
}

export function getRecipesWithIngredient(ingredientId: number) {
  return recipes.filter(
    recipe =>
      recipe.ingredients.find(ing => ing[0] === ingredientId) !== undefined,
  );
}
