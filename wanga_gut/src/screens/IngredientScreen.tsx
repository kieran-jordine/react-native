import React, {useEffect} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Ingredient} from '../data/data';
import {
  getIngredient,
  getIngredients,
  getMeasurement,
} from '../data/recipe_api';
import {insetsToMargins} from '../app/style';
import {gridOption} from '../utils/utils';
import {RootStackProps} from '../app/navigation/types';

const margin = 7;

export default function IngredientScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
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
        <Text>{`No ingrdient found for id: ${route.params.ingredientId}`}</Text>
      </>
    );
  }

  // const {columnWidth, columnCount} = gridOption(
  //   width,
  //   insets.left + insets.right,
  //   margin,
  //   3,
  // );

  // function renderIngredient(ing: ListRenderItemInfo<Ingredient>) {
  //   return (
  //     <Pressable
  //       onPress={() =>
  //         navigation.navigate('Ingredient', {
  //           ingredientId: ing.item.ingredientId,
  //           ingredientName: ing.item.name,
  //         })
  //       }>
  //       <View
  //         style={[
  //           style.recipeContainer,
  //           {width: columnWidth, height: columnWidth + 105},
  //         ]}>
  //         <View>
  //           <Image
  //             style={{borderRadius: columnWidth}}
  //             source={{
  //               uri: ing.item.photo_url,
  //               width: columnWidth,
  //               height: columnWidth,
  //             }}
  //           />
  //           <Text variant="titleMedium" style={style.titleText}>
  //             {ing.item.name}
  //           </Text>
  //         </View>
  //         {/* <Text variant="titleMedium" style={style.categoryText}>
  //           {getMeasurement(ingredient?.recipeId ?? 0, ing.item.ingredientId)}
  //         </Text> */}
  //       </View>
  //     </Pressable>
  //   );
  // }

  return (
    <>
      <Text>Ingredient Screen</Text>
      {/* <FlatList
        key={columnCount}
        showsVerticalScrollIndicator={false}
        style={insetsToMargins(insets, ['top'])}
        numColumns={columnCount}
        data={getIngredients(ingredient.recipeId)}
        renderItem={ing => renderIngredient(ing)}
        keyExtractor={item => `${item.ingredientId}`}
      /> */}
    </>
  );
}

const style = StyleSheet.create({
  recipeContainer: {
    borderWidth: 0,
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
    opacity: 0.5,
  },
});