import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '@/types';

export type FavoritesContextType = {
  favorites: Character[];
  loadFavorites: () => Promise<void>;
  isFavorite: (id: number) => boolean;
  addFavorite: (character: Character) => Promise<void>;
  removeFavorite: (id: number) => Promise<void>;
  toggleFavorite: (character: Character) => Promise<void>;
};
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

interface FavoritesProviderProps {
  children: React.ReactNode;
}

const FAVORITES_STORAGE_KEY = '@favorites';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({children}: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);

      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites) || []);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const addFavorite = async (character: Character) => {
    try {
      if (!favorites.some(fav => fav.id === character.id)) {
        setFavorites(oldState => ({...oldState, character}));

        AsyncStorage.setItem(
          FAVORITES_STORAGE_KEY,
          JSON.stringify([...favorites, character]),
        );
      }
    } catch (err) {
      console.error('Something went wrong with addFavorite: ', err);
    }
  };

  const removeFavorite = async (id: number) => {
    try {
      const newFavorites = favorites.filter(char => char.id !== id);
      setFavorites(newFavorites);

      await AsyncStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(newFavorites),
      );
    } catch (err) {
      console.error('Something went wrong with removeFavorite: ', err);
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some(char => char.id === id);
  };

  const toggleFavorite = async (character: Character) => {
    try {
      const updatedFavorites = favorites.some(fav => fav.id === character.id)
        ? favorites.filter(fav => fav.id !== character.id)
        : [...favorites, character];

      setFavorites(updatedFavorites);

      await AsyncStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(updatedFavorites),
      );
    } catch (err) {
      console.error('Something went wrong with toggleFavorite: ', err);
    }
  };

  const contextValue: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    loadFavorites,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
