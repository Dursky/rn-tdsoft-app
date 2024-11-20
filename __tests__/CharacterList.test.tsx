import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import CharacterListScreen from '../src/stacks/TabNavigation/screens/CharacterList/CharacterList.screen';
import {useNavigation} from '@react-navigation/native';
import {useFavorites} from '@/context/favorites';
import {useCharacters} from '@/hooks/useCharacters';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
}));

jest.mock('@react-navigation/native');
jest.mock('@/context/favorites');
jest.mock('@/hooks/useCharacters');

const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {name: 'Earth', url: ''},
  location: {name: 'Earth', url: ''},
  image: 'image-url',
  episode: [],
  url: '',
  created: '',
  type: '',
};

describe('CharacterListScreen', () => {
  const mockNavigate = jest.fn();
  const mockToggleFavorite = jest.fn();
  const mockIsFavorite = jest.fn();
  const mockFetchNextPage = jest.fn();
  const mockRefetch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockReturnValue({navigate: mockNavigate});
    (useFavorites as jest.Mock).mockReturnValue({
      toggleFavorite: mockToggleFavorite,
      isFavorite: mockIsFavorite,
      favorites: [],
    });
    (useCharacters as jest.Mock).mockReturnValue({
      data: {
        pages: [{results: [mockCharacter]}],
      },
      isLoading: false,
      isError: false,
      error: null,
      isFetchingNextPage: false,
      hasNextPage: true,
      fetchNextPage: mockFetchNextPage,
      refetch: mockRefetch,
    });
  });

  it('renders error state correctly', () => {
    const errorMessage = 'Failed to load';
    (useCharacters as jest.Mock).mockReturnValue({
      isError: true,
      error: {message: errorMessage},
    });

    const {getByText} = render(<CharacterListScreen />);
    expect(getByText(`Error loading characters: ${errorMessage}`)).toBeTruthy();
  });

  it('handles search input correctly', async () => {
    const {getByPlaceholderText} = render(<CharacterListScreen />);
    const searchInput = getByPlaceholderText('Search characters');

    await act(async () => {
      fireEvent.changeText(searchInput, 'Rick');
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    expect(mockRefetch).toHaveBeenCalled();
  });

  it('navigates to character details on card press', () => {
    const {getByText} = render(<CharacterListScreen />);
    fireEvent.press(getByText('Rick Sanchez'));

    expect(mockNavigate).toHaveBeenCalledWith('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: mockCharacter,
    });
  });

  it('handles favorite toggle correctly', () => {
    const {getByText} = render(<CharacterListScreen />);
    fireEvent.press(getByText('LIKE'));

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockCharacter);
  });
});
