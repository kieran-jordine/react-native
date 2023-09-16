import 'react-native-gesture-handler';

import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Recipe} from '../data/data';
import {getCategoryName, getRecipes} from '../data/recipe_api';
import {style} from '../app/theme';
import {Button} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Recipe', {recipeId: 2})}>
        Nav
      </Button>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={getRecipes()}
        renderItem={recipe => renderRecipe(recipe, navigation)}
        keyExtractor={item => `${item.recipeId}`}
      />
    </>
  );
}

function renderRecipe(
  recipe: ListRenderItemInfo<Recipe>,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Recipe', {recipeId: recipe.item.recipeId})
      }>
      <View style={style.container}>
        <Image style={style.photo} source={{uri: recipe.item.photo_url}} />
        <Text style={style.title}>{recipe.item.title}</Text>
        <Text style={style.category}>
          {getCategoryName(recipe.item.categoryId)}
        </Text>
      </View>
    </Pressable>
  );
}

export default HomeScreen;
