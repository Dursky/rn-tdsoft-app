import {useQuery, useQueries, useInfiniteQuery} from '@tanstack/react-query';
import {CharacterFilters, Character, ApiResponse} from '@/types';
import {fetchCharacters, fetchCharacterById} from '@/services/api';

export const useCharacters = (filters?: CharacterFilters) => {
  return useInfiniteQuery<ApiResponse<Character>, Error>({
    queryKey: ['characters', filters],
    queryFn: ({pageParam}) => fetchCharacters(pageParam as number, filters),
    getNextPageParam: (lastPage, pages) => {
      // Check if there's a next page
      if (lastPage.info.next) {
        return pages.length + 1;
      }
      return undefined;
    },
    getPreviousPageParam: (firstPage, pages) => {
      // Check if there's a previous page
      if (firstPage.info.prev) {
        return pages.length - 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};

export const useCharacter = (id: number) => {
  return useQuery<Character, Error>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  });
};

export const useMultipleCharacters = (ids: number[]) => {
  return useQueries({
    queries: ids.map(id => ({
      queryKey: ['character', id],
      queryFn: () => fetchCharacterById(id),
    })),
  });
};
