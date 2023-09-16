import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/app/navigation/StackNavigation';
// import DrawerNavigation from './src/app/navigation/DrawerNavigation';
// import TabNavigation from './src/app/layout/TabNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <DrawerNavigation /> */}
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
}

export default App;
