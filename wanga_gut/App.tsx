import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/app/layout/DrawerNavigation';
// import TabNavigation from './src/app/layout/TabNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
}

export default App;
