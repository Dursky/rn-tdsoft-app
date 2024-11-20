import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './CharacterList.styled';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';
import {CharacterCard} from '@/components/CharacterCard';
import {mockData} from '@/utils/mock';
import {getFlatListSpacer} from '@/utils';
import {useFavorites} from '@/context/favorites';
import {Character} from '@/types';
import {useCharacters} from '@/hooks/useCharacters';
import {queryClient} from '@/services';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<CharacterListStackNavigationProp>();
  const {toggleFavorite, favorites, loadFavorites} = useFavorites();
  const {data, isLoading, isError, error, isFetching} = useCharacters(1);
  const [page, setPage] = useState(1);

  const characters = data?.results || [];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={theme.typography.heading}>Characters</Text>

        <Spacer y={10} />
        <SearchBar onChangeText={text => {}} value="" />
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
          renderItem={({item}) => {
            const isFavorite = favorites.some(fav => fav.id === item.id);

            return (
              <CharacterCard
                item={item}
                isLike={isFavorite}
                onPress={() =>
                  navigate('CharacterDetailsStack', {
                    screen: 'CharacterDetailsScreen',
                    params: item,
                  })
                }
                onPressLike={async () => {
                  await toggleFavorite(item);
                }}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          extraData={favorites}
          refreshing={isFetching}
          onRefresh={() => {
            queryClient.invalidateQueries({
              queryKey: ['characters', 1],
            });
          }}
          onEndReached={() => {
            if (!isFetching && data?.info?.next) {
              setPage(prev => prev + 1);
            }
          }}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
