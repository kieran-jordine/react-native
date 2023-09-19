/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';
import {RootStackProps} from '../../app/navigation/types';
import {
  getCategoryName,
  getPreparationTime,
  getRecipe,
} from '../../data/recipe_api';
import HeaderImage from '../../components/v1/HeaderImage';

export default function RecipeScreen({
  route,
  navigation,
}: RootStackProps<'Recipe'>) {
  const recipe = getRecipe(route.params.recipeId);

  return (
    <>
      {recipe && (
        <View style={{flex: 1}}>
          <HeaderImage uri={recipe.photo_url} />
          <ScrollView contentContainerStyle={style.container}>
            <Text variant="headlineLarge" style={style.titleText}>
              {recipe.title}
            </Text>
            <Text variant="headlineMedium" style={style.categoryText}>
              {getCategoryName(recipe.categoryId)}
            </Text>
            <View style={style.row}>
              <IconButton icon="punch-clock" />
              <Text variant="titleLarge">
                {getPreparationTime(recipe.time)}
              </Text>
            </View>
            <Button
              style={style.mb8}
              mode="outlined"
              onPress={() =>
                navigation.navigate('IngredientList', {
                  recipeId: recipe.recipeId,
                  recipeTitle: recipe.title,
                })
              }>
              View Ingredients
            </Button>
            <Text variant="bodyLarge">{recipe.description}</Text>
          </ScrollView>
        </View>
      )}
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingBottom: 60,
  },
  titleText: {
    marginVertical: 16,
  },
  categoryText: {
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mb8: {marginBottom: 8},
});
