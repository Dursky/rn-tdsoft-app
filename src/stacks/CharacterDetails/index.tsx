import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CharacterDetailsScreen} from './screens';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {styles} from './screens/CharacterDetails/CharacterDetails.styled';

const Tab = createBottomTabNavigator();

export const CharacterDetailsStack = () => {
  // NOTE: Stack has been replaced on Tab due to problems with maintaining the latest cache data - store context (like feature)
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: Header,
          ...styles,
        }}>
        <Tab.Screen
          name="CharacterDetailsScreen"
          component={CharacterDetailsScreen}
        />
      </Tab.Navigator>
      <Footer />
    </>
  );
};
