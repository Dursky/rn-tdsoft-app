import axios from 'axios';
import {Character, ApiResponse, CharacterFilters} from '@/types';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 10000,
});

export const fetchCharacters = async (
  page: number = 1,
  filters?: CharacterFilters,
): Promise<ApiResponse<Character>> => {
  const params = new URLSearchParams({
    page: page.toString(),
    ...(filters?.name && {name: filters.name}),
    ...(filters?.status && {status: filters.status}),
    ...(filters?.species && {species: filters.species}),
    ...(filters?.type && {type: filters.type}),
    ...(filters?.gender && {gender: filters.gender}),
  });

  const {data} = await api.get<ApiResponse<Character>>(`/character?${params}`);
  return data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const {data} = await api.get<Character>(`/character/${id}`);
  return data;
};

export const fetchMultipleCharacters = async (
  ids: number[],
): Promise<Character[]> => {
  const {data} = await api.get<Character[]>(`/character/${ids.join(',')}`);
  return data;
};
