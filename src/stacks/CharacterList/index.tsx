import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterListStackRoutes} from './CharacterList.routes';
import {CharacterListScreen} from './screens';
import {CharacterDetailsStack} from '../CharacterDetails';
import {Header} from '@/components/Header';

const Stack = createNativeStackNavigator();

export const CharacterListStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: Header}}>
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterListScreen}
        children={CharacterListScreen}
      />
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterDetailsStack}
        children={CharacterDetailsStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};