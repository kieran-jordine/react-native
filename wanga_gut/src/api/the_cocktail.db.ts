import {useQuery} from '@tanstack/react-query';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

//list of categories
//Ordinary Drink, Cocktail, Shake, Cocoa, Shot, ...

//list of ingredients
//light rum, applejack, gin, dark rum, scotch, ...

//list of glasses
//highball glass, cocktail glass, champagne flute, ...

//alcoholic filter
//Alcoholic, Non Alcoholic, Optional Alcohol

//filter/search
// by category
// by glass
// by alcoholic
// by non_alcoholic
// by optional_alcohol

// details by id (all drinks)
type AlcoholicFilter = 'alcoholic' | 'non_alcoholic' | 'optional_alcohol';
async function getByAlcoholicFilter(
  filter: AlcoholicFilter,
): Promise<Cocktail[]> {
  return fetch(`${baseUrl}/filter.php?a=${filter}`)
    .then(res => res.json())
    .then(res => res.drinks);
}
export function useAlcoholicFilter(filter: AlcoholicFilter) {
  return useQuery<Cocktail[], Error>({
    queryKey: ['cocktails', filter],
    queryFn: () => getByAlcoholicFilter(filter),
  });
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
