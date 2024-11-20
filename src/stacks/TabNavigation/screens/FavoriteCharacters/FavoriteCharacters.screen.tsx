import React, {useState, useMemo} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './FavoriteCharacters.styled';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';
import {CharacterCard} from '@/components/CharacterCard';
import {getFlatListSpacer} from '@/utils';
import {useFavorites} from '@/context/favorites';
import {MainStackNavigationProp} from '@/stacks/Main/Main.routes';
import {Filter} from '@/components/Filter';
import {CharacterFilters} from '@/types';

const FavoriteCharactersScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const {toggleFavorite, favorites} = useFavorites();
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<CharacterFilters>({});

  const filteredFavorites = useMemo(() => {
    return favorites
      .filter(
        character =>
          !searchText ||
          character.name.toLowerCase().includes(searchText.toLowerCase()),
      )
      .filter(
        character =>
          !filters.status || character.status.toLowerCase() === filters.status,
      )
      .filter(
        character =>
          !filters.species ||
          character.species.toLowerCase() === filters.species?.toLowerCase(),
      );
  }, [favorites, searchText, filters]);

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
        <Spacer y={10} />
        <Filter onApplyFilters={setFilters} initialFilters={filters} />
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
            No favorite characters found matching your criteria
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
