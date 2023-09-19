import React from 'react';
import {useRoute} from '@react-navigation/native';

import {getRecipesByCategory} from '../../data/recipe_api';
import {RootStackProps} from '../../app/navigation/types';
import RecipesList from '../../components/v1/RecipesList';

export default function CategoryScreen() {
  const route = useRoute<RootStackProps<'Category'>['route']>();
  return (
    <>
      <RecipesList recipes={getRecipesByCategory(route.params.categoryId)} />
    </>
  );
}
