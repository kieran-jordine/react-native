/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

export default function HeaderImage({uri}: {uri: string}) {
  const {width} = useWindowDimensions();
  return (
    <Image
      style={{width, height: 200}}
      source={{
        uri: uri,
      }}
    />
  );
}
