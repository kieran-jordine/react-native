import {categories, recipes} from './data';

export function getRecipes() {
  return recipes;
}

export function getCategoryName(categoryId: number) {
  return (
    categories.find(category => category.id === categoryId)?.name ?? 'Unknown'
  );
}
