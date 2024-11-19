import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {Tab as TabComponent} from '@/components';
import {tabConfigStyles} from './Tab.styled';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';

type TabParamList = {
  'ALL CHARACTERS': undefined;
  'LIKED CHARACTERS': undefined;
};

type TabType = 'allCharacters' | 'likedCharacters';

interface TabScreenProps {
  onPress?: (e: any) => void;
  accessibilityState?: {
    selected?: boolean;
  };
}

interface ExtraOptions {
  header?: () => React.ReactNode;
}

const Tab = createBottomTabNavigator<TabParamList>();

const createTabScreenProps = (
  type: TabType,
  extraOptions: ExtraOptions = {},
) => ({
  ...tabConfigStyles,
  tabBarButton: ({onPress, accessibilityState}: TabScreenProps) => (
    <TabComponent
      type={type}
      onPress={e => onPress?.(e)}
      active={accessibilityState?.selected}
    />
  ),
  ...extraOptions,
});

export const TabNavigationStack = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="ALL CHARACTERS"
          component={CharacterListStack}
          options={createTabScreenProps('allCharacters')}
        />
        <Tab.Screen
          name="LIKED CHARACTERS"
          component={FavoriteCharactersStack}
          options={createTabScreenProps('likedCharacters', {
            header: Header,
          })}
        />
      </Tab.Navigator>
      <Footer />
    </>
  );
};
