import {categories, recipes} from './data';

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
