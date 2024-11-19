import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FavoriteCharactersStackRoutes} from './FavoriteCharacters.routes';
import {FavoriteCharactersScreen} from './screens';
import {Header} from '@/components/Header';

const Stack = createNativeStackNavigator();

export const FavoriteCharactersStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: Header}}>
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.FavoriteCharactersScreen}
        children={FavoriteCharactersScreen}
      />
    </Stack.Navigator>
  );
};
