import React from 'react';
import {ScrollView, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

import {style} from '../app/style';
import {useRecipeQuery} from '../api/the_meal_db';
import {RootStackProps} from '../app/navigation/types';
import HeaderImage from '../components/HeaderImage';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function RecipeDetailScreen() {
  const route = useRoute<RootStackProps<'RecipeDetail'>['route']>();
  const recipeQuery = useRecipeQuery(route.params.recipeId);

  return (
    <>
      {recipeQuery.data && (
        <>
          <HeaderImage uri={recipeQuery.data.strMealThumb} />
          <ScrollView style={[style.p7]}>
            <Text variant="titleLarge">{recipeQuery.data.strMeal}</Text>
            <View style={[style.row, style.centery]}>
              <IconButton icon="location-on" />
              <Text variant="bodyLarge">{recipeQuery.data.strArea}</Text>
            </View>
            <Text variant="bodyLarge" style={style.bold}>
              Ingredients
            </Text>
            {recipeQuery.data.strIngredients.map(ing => (
              <View key={ing} style={[style.row, style.centery]}>
                <IconButton icon="noise-control-off" size={12} />
                <Text>{ing}</Text>
              </View>
            ))}

            <Text variant="bodyLarge" style={style.bold}>
              Instructions
            </Text>
            <Text variant="bodyMedium" style={[style.m7]}>
              {recipeQuery.data.strInstructions}
            </Text>
            {recipeQuery.data.strYoutube && (
              <View>
                <Text variant="bodyLarge" style={style.bold}>
                  Video
                </Text>
                <YoutubeIframe
                  height={200}
                  videoId={recipeQuery.data.strYoutube.split('?v=')[1]}
                />
              </View>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
}
