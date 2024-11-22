import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CharacterCard} from '../src/components/CharacterCard';
import {Character} from '../src/types';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://example.com',
  },
  location: {
    name: 'Earth',
    url: 'https://example.com',
  },
  image: 'https://example.com/image.jpg',
  episode: ['https://example.com/episode/1'],
  url: 'https://example.com/character/1',
  created: '2023-01-01',
};

describe('CharacterCard', () => {
  it('renders basic view correctly', () => {
    const {getByText} = render(<CharacterCard item={mockCharacter} />);

    expect(getByText('NAME')).toBeTruthy();
    expect(getByText('Rick Sanchez')).toBeTruthy();
    expect(getByText('STATUS')).toBeTruthy();
    expect(getByText('Alive')).toBeTruthy();
    expect(getByText('SPECIES')).toBeTruthy();
    expect(getByText('Human')).toBeTruthy();
  });

  it('renders detail view correctly', () => {
    const {getByText} = render(
      <CharacterCard item={mockCharacter} view="detail" />,
    );

    expect(getByText('NAME')).toBeTruthy();
    expect(getByText('Rick Sanchez')).toBeTruthy();
    expect(getByText('ORIGIN')).toBeTruthy();
    expect(getByText('Earth')).toBeTruthy();
    expect(getByText('GENDER')).toBeTruthy();
    expect(getByText('Male')).toBeTruthy();
  });

  it('handles like button press in basic view', () => {
    const onPressLike = jest.fn();
    const {getByText} = render(
      <CharacterCard item={mockCharacter} onPressLike={onPressLike} />,
    );

    fireEvent.press(getByText('LIKE'));
    expect(onPressLike).toHaveBeenCalledTimes(1);
  });

  it('handles like button press in detail view', () => {
    const onPressLike = jest.fn();
    const {getByText} = render(
      <CharacterCard
        item={mockCharacter}
        view="detail"
        onPressLike={onPressLike}
      />,
    );

    fireEvent.press(getByText('ADD TO LIKED'));
    expect(onPressLike).toHaveBeenCalledTimes(1);
  });

  it('shows correct like button text based on isLike prop', () => {
    const {getByText, rerender} = render(
      <CharacterCard item={mockCharacter} view="detail" isLike={false} />,
    );

    expect(getByText('ADD TO LIKED')).toBeTruthy();

    rerender(
      <CharacterCard item={mockCharacter} view="detail" isLike={true} />,
    );

    expect(getByText('REMOVE FROM LIKE')).toBeTruthy();
  });
});
