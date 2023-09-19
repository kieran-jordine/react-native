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

import {Category} from '../../data/data';
import {getCategories, getRecipeCount} from '../../data/recipe_api';
import {insetsToMargins} from '../../app/style';
import {gridOption} from '../../utils/utils';

const margin = 10;

export default function CategoryListScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  const {columnWidth, columnCount} = gridOption(
    width,
    insets.left + insets.right,
    margin,
    1,
  );

  function renderCategory(cat: ListRenderItemInfo<Category>) {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Category', {
            categoryId: cat.item.id,
          })
        }>
        <View style={[style.container, {width: columnWidth}]}>
          <Image
            style={style.photo}
            source={{
              uri: cat.item.photo_url,
              width: columnWidth,
              height: columnWidth * 0.75,
            }}
          />
          <Text variant="titleLarge" style={style.titleText}>
            {cat.item.name}
          </Text>
          <Text variant="titleSmall" style={style.recipeCount}>
            {`${getRecipeCount(cat.item.id)} recipes`}
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
        data={getCategories()}
        renderItem={renderCategory}
        keyExtractor={item => `${item.id}`}
      />
    </>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: 'grey',
    marginVertical: 7,
    borderRadius: 15,
    justifyContent: 'space-between',
    marginLeft: margin,
  },
  photo: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    marginVertical: 8,
    textAlign: 'center',
  },
  recipeCount: {
    marginBottom: 10,
    textAlign: 'center',
    opacity: 0.5,
  },
});
