import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import debounce from 'lodash/debounce';

import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';
import {CharacterCard} from '@/components/CharacterCard';

import {getFlatListSpacer} from '@/utils';
import {useFavorites} from '@/context/favorites';

import {useCharacters} from '@/hooks/useCharacters';
import {MainStackNavigationProp} from '@/stacks/Main/Main.routes';
import {CharacterFilters} from '@/types';
import {Filter} from '@/components/Filter';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const {toggleFavorite, favorites, isFavorite} = useFavorites();
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<CharacterFilters>({});

  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useCharacters(filters);

  const characters = data?.pages.flatMap(page => page.results) ?? [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);

    debounce(() => {
      setFilters(prev => ({
        ...prev,
        name: text || undefined,
      }));
      refetch();
    }, 300)();
  };

  const handleClear = () => {
    setSearchText('');
    setFilters({});
    refetch();
  };

  const handleApplyFilters = (newFilters: CharacterFilters) => {
    setFilters(prev => ({
      ...prev,
      status: newFilters.status,
      species: newFilters.species,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={theme.typography.heading}>Characters</Text>

        <Spacer y={10} />
        <SearchBar
          onChangeText={handleSearch}
          onClear={handleClear}
          value={searchText}
          placeholder="Search characters..."
        />
        <Spacer y={10} />
        <Filter onApplyFilters={handleApplyFilters} />
      </View>

      <Spacer y={theme.spacing.md} />
      {isError ? (
        <Text style={styles.errorText}>
          Error loading characters: {error?.message}
        </Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <FlatList
          data={characters}
          style={styles.list}
          ItemSeparatorComponent={getFlatListSpacer}
          renderItem={({item}) => (
            <CharacterCard
              item={item}
              isLike={isFavorite(item.id)}
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
          extraData={[favorites, searchText]}
          refreshing={isLoading}
          onRefresh={() => {
            refetch();
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            isFetchingNextPage ? (
              <ActivityIndicator size="large" color={theme.colors.primary} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
