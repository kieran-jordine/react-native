import React, {useEffect} from 'react';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

import {getIngredient, getRecipesWithIngredient} from '../data/recipe_api';
import {RootStackProps} from '../app/navigation/types';
import RecipesList from '../components/RecipesList';

export default function IngredientScreen() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const route = useRoute<RootStackProps<'Ingredient'>['route']>();

  const ingredient = getIngredient(route.params.ingredientId);

  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.ingredientName}`,
    });
  }, [navigation, route.params.ingredientName]);

  if (!ingredient) {
    return (
      <>
        <Text>{`No ingredient found for id: ${route.params.ingredientId}`}</Text>
      </>
    );
  }

  return (
    <>
      <Image
        source={{uri: ingredient.photo_url, width, height: width * 0.75}}
      />
      <Text
        variant="headlineMedium"
        style={
          style.titleText
        }>{`Recipes with ${route.params.ingredientName}`}</Text>
      <RecipesList
        recipes={getRecipesWithIngredient(ingredient.ingredientId)}
      />
    </>
  );
}

const style = StyleSheet.create({
  titleText: {
    marginTop: 3,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});
