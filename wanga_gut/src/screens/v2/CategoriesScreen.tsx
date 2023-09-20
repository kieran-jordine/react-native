import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Avatar, Divider, Text} from 'react-native-paper';
import {style} from '../../app/style';
import {useCategoryQuery, useRecipesForCategory} from '../../api/the_meal_db';
import {useTheme} from '@react-navigation/native';
import RecipesList from './RecipesList';

export default function CategoriesScreen() {
  const query1 = useCategoryQuery();
  const theme = useTheme();

  const [category, setCategory] = useState('');

  const query2 = useRecipesForCategory(category);
  if (category) {
    query2.refetch();
  }

  return (
    <>
      <View style={[style.p3]}>
        <Text>The Meal DB Categories</Text>
        <ScrollView
          horizontal
          contentContainerStyle={style.p5}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {query1?.data?.map(cat => (
            <Pressable
              key={cat.idCategory}
              style={[style.center, style.m3]}
              onPress={() => setCategory(cat.strCategory)}>
              <Avatar.Image
                source={{uri: cat.strCategoryThumb}}
                style={{backgroundColor: theme.colors.border}}
              />
              <Text variant="labelMedium" style={style.faded}>
                {cat.strCategory}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Divider />
        {/* {query2.isFetching && (
          <ActivityIndicator style={{alignSelf: 'center'}} />
        )} */}
        <RecipesList recipes={query2.data} />
      </View>
    </>
  );
}
