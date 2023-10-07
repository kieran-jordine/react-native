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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';

import {gridOption} from '../utils/utils';
import {insetsToMargins} from '../app/style';
import {Recipe} from '../api/models';
import {useNavigation} from '@react-navigation/native';

interface Props {
  recipes?: Recipe[];
  space: number;
  columns?: number;
}

RecipesList.defaultProps = {
  space: 5,
};

export default function RecipesList({recipes, columns, space}: Props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {columnWidth, columnCount} = gridOption(
    useWindowDimensions().width,
    insets.left + insets.right,
    space,
    columns,
  );

  function renderRecipe(recipe: ListRenderItemInfo<Recipe>) {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('RecipeDetail', {recipeId: recipe.item.idMeal})
        }>
        <View
          style={[
            style.recipeContainer,
            {
              marginLeft: space,
              marginVertical: space,
              width: columnWidth,
              height: columnWidth + 45,
            },
          ]}>
          <View>
            <Image
              style={style.recipePhoto}
              source={{
                uri: recipe.item.strMealThumb,
                width: columnWidth,
                height: columnWidth * 0.85,
              }}
            />
            <Text variant="titleMedium" style={style.titleText}>
              {recipe.item.strMeal}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <FlatList
      key={columnCount}
      showsVerticalScrollIndicator={false}
      style={insetsToMargins(insets, ['top'])}
      numColumns={columnCount}
      data={recipes ?? []}
      renderItem={recipe => renderRecipe(recipe)}
      keyExtractor={item => `${item.idMeal}`}
      nestedScrollEnabled
    />
  );
}

const style = StyleSheet.create({
  recipeContainer: {
    borderWidth: 0.4,
    borderColor: 'grey',
    borderRadius: 15,
    justifyContent: 'space-between',
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
});
