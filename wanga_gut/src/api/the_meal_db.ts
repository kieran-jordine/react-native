import {useQuery} from '@tanstack/react-query';
import {Category, Recipe} from '../screens/v2/models';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

async function getCategories(): Promise<Category[]> {
  return fetch(`${baseUrl}/categories.php`)
    .then(res => res.json())
    .then(res => res.categories);
}

async function getRecipesByCategory(category: string): Promise<Recipe[]> {
  return fetch(`${baseUrl}/filter.php?c=${category}`)
    .then(res => res.json())
    .then(res => res.meals);
}

export function useCategoryQuery() {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
}

export function useRecipesForCategory(category: string) {
  return useQuery<Recipe[], Error>({
    queryKey: ['recipes', category],
    queryFn: () => getRecipesByCategory(category),
    enabled: false,
  });
}
