/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {RecipeProps} from '../app/navigation/StackNavigation';

const cols = 3;

export default function RecipeScreen({route, navigation}: RecipeProps) {
  const {width, height} = useWindowDimensions();
  const margin = 10;
  const numerator = width - (cols + 1) * margin;
  const denominator = cols;
  const widthOf = numerator / denominator;
  console.log(route);
  console.log(navigation.canGoBack());
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View>
        <Text style={{fontSize: 24}}>{`width:${width}, height=${height}`}</Text>
        <Text style={{fontSize: 24}}>{`numerator=${numerator}`}</Text>
        <Text
          style={{fontSize: 24}}>{`denominator/columns=${denominator}`}</Text>
        <Text style={{fontSize: 24}}>{`margin=${margin}`}</Text>
        <Text style={{fontSize: 24}}>{`width-of-item=${widthOf}`}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={cols}
          data={[1, 2, 3]}
          renderItem={item => renderItem(item.item)}
        />
      </View>
    </>
  );
}

function renderItem(item: number) {
  return (
    <Pressable
      style={style.container}
      onPress={() => Alert.alert('title', 'message', [])}>
      <View>
        <Text style={{backgroundColor: 'transparent'}}>{item}</Text>
      </View>
    </Pressable>
  );
}

const {width} = Dimensions.get('screen');
const margin = 10;
const numerator = width - (cols + 1) * margin; // extra 1 for margin-right of last column
const denominator = cols;
const widthOfItem = numerator / denominator;

const style = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: 'grey',
    marginLeft: margin,
    width: widthOfItem,
    height: widthOfItem,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
