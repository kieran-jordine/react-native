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

import {gridOption} from '../../utils/utils';
import {insetsToMargins} from '../../app/style';
import {Recipe} from './models';
import {useNavigation} from '@react-navigation/native';

const margin = 7;

interface Props {
  recipes?: Recipe[];
}

export default function RecipesList({recipes}: Props) {
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
          navigation.navigate('RecipeDetail', {recipeId: recipe.item.idMeal})
        }>
        <View
          style={[
            style.recipeContainer,
            {width: columnWidth, height: columnWidth + 45},
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

  if (!recipes) {
    return <></>;
  }

  return (
    <>
      <FlatList
        key={columnCount}
        showsVerticalScrollIndicator={false}
        style={insetsToMargins(insets, ['top'])}
        numColumns={columnCount}
        data={recipes}
        renderItem={recipe => renderRecipe(recipe)}
        keyExtractor={item => `${item.idMeal}`}
        nestedScrollEnabled
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
