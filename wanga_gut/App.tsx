import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {
  ThemeContext,
  useThemeContextProvider,
} from './src/app/config/context_providers';
import StackNavigation from './src/app/navigation/StackNavigation';
import {RnPaperIcons} from './src/app/config/RnPaperIcons';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {theme, setTheme, navTheme, paperTheme} = useThemeContextProvider();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <SafeAreaProvider>
          <PaperProvider
            theme={paperTheme}
            settings={{icon: props => RnPaperIcons(props)}}>
            <NavigationContainer theme={navTheme}>
              <StackNavigation />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
