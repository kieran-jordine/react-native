import {useQuery} from '@tanstack/react-query';
import {Category, Recipe, RecipeDetail} from './models';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

async function getCategories(): Promise<Category[]> {
  return fetch(`${baseUrl}/categories.php`)
    .then(res => res.json())
    .then(res => res.categories);
}
export function useCategoryQuery() {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
}

async function getRecipesByCategory(category: string): Promise<Recipe[]> {
  return fetch(`${baseUrl}/filter.php?c=${category}`)
    .then(res => res.json())
    .then(res => res.meals);
}
export function useRecipesForCategoryQuery(category: string) {
  return useQuery<Recipe[], Error>({
    queryKey: ['recipes', category],
    queryFn: () => getRecipesByCategory(category),
    enabled: !!category,
  });
}

async function getRecipe(mealId: string): Promise<RecipeDetail> {
  return fetch(`${baseUrl}/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(res => {
      const result = res.meals[0];
      const strIngredients: string[] = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        if (result[ingredient] && result[measure]) {
          strIngredients.push(`${result[measure]} - ${result[ingredient]}`);
        }
      }
      const detail: RecipeDetail = {
        idMeal: result.idMeal,
        strMeal: result.strMeal,
        strDrinkAlternate: result.strDrinkAlternate,
        strCategory: result.strCategory,
        strArea: result.strArea,
        strInstructions: result.strInstructions,
        strIngredients,
        strMealThumb: result.strMealThumb,
        strTags: result.strTags,
        strYoutube: result.strYoutube,
        strSource: result.strSource,
        strImageSource: result.strImageSource,
        strCreativeCommonsConfirmed: result.strCreativeCommonsConfirmed,
        dateModified: result.dateModified,
      };
      return detail;
    });
}
export function useRecipeQuery(mealId: string) {
  return useQuery<RecipeDetail, Error>({
    queryKey: ['recipe', mealId],
    queryFn: () => getRecipe(mealId),
  });
}
