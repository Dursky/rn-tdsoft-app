import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CharacterDetailsScreen} from './screens';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {tabConfigStyles} from '../TabNavigation/Tab.styled';

const Tab = createBottomTabNavigator();

export const CharacterDetailsStack = () => {
  // NOTE: Stack has been replaced on Tab due to problems with maintaining the latest cache data - store context (like feature)
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: Header,
          ...tabConfigStyles.tabBarStyle,
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
