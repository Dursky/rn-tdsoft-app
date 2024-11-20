import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import {TabNavigationStack} from './src/stacks/TabNavigation';
import FavoritesProvider from '@/context/favorites/FavoritesContext';
import {queryClient} from '@/services';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <NavigationContainer>
          <TabNavigationStack />
        </NavigationContainer>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
