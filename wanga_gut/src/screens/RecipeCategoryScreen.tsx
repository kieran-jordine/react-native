import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {RootStackProps} from '../app/navigation/types';
import {style} from '../app/style';
import Statusbar from '../components/Statusbar';
import RecipesList from '../components/RecipesList';
import {useRecipesForCategoryQuery} from '../api/the_meal_db';

export default function RecipeCategoryScreen() {
  const route = useRoute<RootStackProps<'RecipeCategory'>['route']>();
  const recipesForCategory = useRecipesForCategoryQuery(route.params.category);

  return (
    <>
      <Statusbar />
      {recipesForCategory.isFetching && (
        <View style={[style.flex1, style.center]}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      <RecipesList recipes={recipesForCategory.data} />
    </>
  );
}
