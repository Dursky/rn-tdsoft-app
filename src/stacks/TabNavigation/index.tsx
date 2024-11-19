import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListStack} from '../CharacterList';
import {FavoriteCharactersStack} from '../FavoriteCharacters';
import {Tab as TabComponent} from '@/components';
import {tabConfigStyles} from './Tab.styled';
import {View} from 'react-native';
import {Footer} from '@/components/Footer/Footer.component';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="ALL CHARACTERS"
          component={CharacterListStack}
          options={{
            ...tabConfigStyles,
            tabBarButton: ({onPress, accessibilityState}) => (
              <TabComponent
                type="allCharacters"
                onPress={e => onPress?.(e)}
                active={accessibilityState?.selected}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LIKED CHARACTERS"
          component={FavoriteCharactersStack}
          options={{
            ...tabConfigStyles,
            tabBarButton: ({onPress, accessibilityState}) => (
              <TabComponent
                type="likedCharacters"
                onPress={e => onPress?.(e)}
                active={accessibilityState?.selected}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Footer />
    </>
  );
};
