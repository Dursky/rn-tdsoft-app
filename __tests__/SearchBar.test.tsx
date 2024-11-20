import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar/SearchBar.component';
import {theme} from '../src/styles';

describe('SearchBar', () => {
  const defaultProps = {
    value: '',
    onChangeText: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default placeholder', () => {
    const {getByPlaceholderText} = render(<SearchBar {...defaultProps} />);
    expect(getByPlaceholderText('Search the characters')).toBeTruthy();
  });

  it('renders with custom placeholder', () => {
    const {getByPlaceholderText} = render(
      <SearchBar {...defaultProps} placeholder="Custom placeholder" />,
    );
    expect(getByPlaceholderText('Custom placeholder')).toBeTruthy();
  });

  it('handles text input changes', () => {
    const onChangeText = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar {...defaultProps} onChangeText={onChangeText} />,
    );

    fireEvent.changeText(getByPlaceholderText('Search the characters'), 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('handles focus and blur events', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar {...defaultProps} onFocus={onFocus} onBlur={onBlur} />,
    );

    const input = getByPlaceholderText('Search the characters');

    fireEvent(input, 'focus');
    expect(onBlur).toHaveBeenCalled();

    fireEvent(input, 'blur');
    expect(onFocus).toHaveBeenCalled();
  });

  it('changes placeholder text color based on isActive prop', () => {
    const {getByPlaceholderText, rerender} = render(
      <SearchBar {...defaultProps} isActive={false} />,
    );

    let input = getByPlaceholderText('Search the characters');
    expect(input.props.placeholderTextColor).toBe(theme.colors.mediumGreen);

    rerender(<SearchBar {...defaultProps} isActive={true} />);

    input = getByPlaceholderText('Search the characters');
    expect(input.props.placeholderTextColor).toBe(theme.colors.darkGreen);
  });
});
