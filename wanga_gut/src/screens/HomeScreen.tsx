import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Recipe} from '../data/data';
import {getCategoryName, getRecipes} from '../data/recipe_api';
import {insetsToMargins} from '../app/style';
import {gridOption} from '../utils/utils';

const margin = 7;

function HomeScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {columnWidth, columnCount} = gridOption(
    useWindowDimensions().width,
    insets.left + insets.right,
    margin,
  );

  function renderRecipe(recipe: ListRenderItemInfo<Recipe>) {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Recipe', {recipeId: recipe.item.recipeId})
        }>
        <View
          style={[
            style.recipeContainer,
            {width: columnWidth, height: columnWidth + 75},
          ]}>
          <View>
            <Image
              style={style.recipePhoto}
              source={{
                uri: recipe.item.photo_url,
                width: columnWidth,
                height: columnWidth * 0.85,
              }}
            />
            <Text variant="titleLarge" style={style.titleText}>
              {recipe.item.title}
            </Text>
          </View>
          <Text variant="titleMedium" style={style.categoryText}>
            {getCategoryName(recipe.item.categoryId)}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <>
      <FlatList
        key={columnCount}
        showsVerticalScrollIndicator={false}
        style={insetsToMargins(insets, ['top'])}
        numColumns={columnCount}
        data={getRecipes()}
        renderItem={recipe => renderRecipe(recipe)}
        keyExtractor={item => `${item.recipeId}`}
      />
    </>
  );
}

const style = StyleSheet.create({
  recipeContainer: {
    borderWidth: 0.4,
    borderColor: 'grey',
    marginVertical: 7,
    borderRadius: 15,
    justifyContent: 'space-between',
    marginLeft: margin,
  },
  recipePhoto: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    marginTop: 3,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  categoryText: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
