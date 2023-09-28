import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Avatar, Divider, Text} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {style} from '../../app/style';
import {useCategoryQuery, useRecipesForCategory} from '../../api/the_meal_db';
import RecipesList from './RecipesList';
import {useAlcoholicFilter} from '../../api/the_cocktail.db';

export default function CategoriesScreen() {
  const theme = useTheme();
  const query1 = useCategoryQuery();
  const [category, setCategory] = useState('');
  const query2 = useRecipesForCategory(category);
  if (category) {
    query2.refetch();
  }

  const cocktailQuery1 = useAlcoholicFilter('alcoholic');
  const cocktailQuery2 = useAlcoholicFilter('non_alcoholic');
  const cocktailQuery3 = useAlcoholicFilter('optional_alcohol');

  return (
    <>
      <View>
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
        <ScrollView
          horizontal
          contentContainerStyle={style.p5}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {cocktailQuery1.data?.map(cocktail => (
            <Pressable key={cocktail.idDrink} style={[style.center, style.m3]}>
              <Avatar.Image
                source={{uri: cocktail.strDrinkThumb}}
                style={{backgroundColor: theme.colors.border}}
              />
              <Text variant="labelMedium" style={style.faded}>
                {cocktail.strDrink.substring(0, 10)}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Divider />
        <ScrollView
          horizontal
          contentContainerStyle={style.p5}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {cocktailQuery2.data?.map(cocktail => (
            <Pressable key={cocktail.idDrink} style={[style.center, style.m3]}>
              <Avatar.Image
                source={{uri: cocktail.strDrinkThumb}}
                style={{backgroundColor: theme.colors.border}}
              />
              <Text variant="labelMedium" style={style.faded}>
                {cocktail.strDrink.substring(0, 10)}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Divider />
        <ScrollView
          horizontal
          contentContainerStyle={style.p5}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {cocktailQuery3.data?.map(cocktail => (
            <Pressable key={cocktail.idDrink} style={[style.center, style.m3]}>
              <Avatar.Image
                source={{uri: cocktail.strDrinkThumb}}
                style={{backgroundColor: theme.colors.border}}
              />
              <Text variant="labelMedium" style={style.faded}>
                {cocktail.strDrink.substring(0, 10)}
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
