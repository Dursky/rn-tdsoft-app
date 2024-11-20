import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import FavoritesProvider from '@/context/favorites/FavoritesContext';
import {queryClient} from '@/services';
import {MainStack} from './src/stacks/Main';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
