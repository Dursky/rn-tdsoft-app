import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsScreen} from './screens';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {styles} from './screens/CharacterDetails/CharacterDetails.styled';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: Header,
          ...styles,
        }}>
        <Stack.Screen
          name="CharacterDetailsScreen"
          component={CharacterDetailsScreen}
        />
      </Stack.Navigator>
      <Footer />
    </>
  );
};
