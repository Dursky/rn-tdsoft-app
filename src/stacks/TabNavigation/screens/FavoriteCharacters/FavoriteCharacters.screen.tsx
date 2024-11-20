import {View, Text, FlatList} from 'react-native';
import React, {useState, useMemo} from 'react';
import {styles} from './FavoriteCharacters.styled';
import {useNavigation} from '@react-navigation/native';

import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';
import {CharacterCard} from '@/components/CharacterCard';

import {getFlatListSpacer} from '@/utils';
import {useFavorites} from '@/context/favorites';

import {MainStackNavigationProp} from '@/stacks/Main/Main.routes';

const FavoriteCharactersScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const {toggleFavorite, favorites} = useFavorites();
  const [searchText, setSearchText] = useState('');

  const filteredFavorites = useMemo(() => {
    if (!searchText) {
      return favorites;
    }

    return favorites.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [favorites, searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={theme.typography.heading}>Characters</Text>
        <Spacer y={10} />
        <SearchBar
          onChangeText={setSearchText}
          onClear={() => setSearchText('')}
          value={searchText}
          placeholder="Search favorite characters..."
        />
      </View>
      {favorites.length === 0 ? (
        <View style={styles.nullHeadingContainer}>
          <Text style={styles.textPlacing}>
            You haven't added any characters to favorites yet
          </Text>
        </View>
      ) : filteredFavorites.length === 0 ? (
        <View style={styles.nullHeadingContainer}>
          <Text style={styles.textPlacing}>
            No favorite characters found matching "{searchText}"
          </Text>
        </View>
      ) : (
        <>
          <Spacer y={theme.spacing.md} />
          <FlatList
            data={filteredFavorites}
            style={styles.list}
            ItemSeparatorComponent={getFlatListSpacer}
            renderItem={({item}) => (
              <CharacterCard
                item={item}
                isLike={true}
                onPress={() =>
                  navigate('CharacterDetailsStack', {
                    screen: 'CharacterDetailsScreen',
                    params: item,
                  })
                }
                onPressLike={() => {
                  toggleFavorite(item);
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
          />
        </>
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
