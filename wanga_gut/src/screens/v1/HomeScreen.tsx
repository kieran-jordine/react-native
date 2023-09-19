import React from 'react';
import {getRecipes} from '../../data/recipe_api';
import RecipesList from '../../components/RecipesList';

export default function HomeScreen() {
  return (
    <>
      <RecipesList recipes={getRecipes()} />
    </>
  );
}