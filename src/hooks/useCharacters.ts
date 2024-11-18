import {useQuery, useQueries} from '@tanstack/react-query';
import {CharacterFilters, Character, ApiResponse} from '@/services/types';
import {fetchCharacters, fetchCharacterById} from '@/services/api';

export const useCharacters = (page: number = 1, filters?: CharacterFilters) => {
  return useQuery<ApiResponse<Character>, Error>({
    queryKey: ['characters', page, filters],
    queryFn: () => fetchCharacters(page, filters),
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
