import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ViewStyle} from 'react-native';
import {theme} from '@/styles';
import {Search, Close} from '@/icons';
import {styles} from './SearchBar.styled';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isActive?: boolean;
};

export const SearchBar = (props: SearchBarProps) => {
  const {
    value,
    onChangeText,
    placeholder = 'Search the characters',
    style,
    onClear,
    onFocus,
    onBlur,
    isActive,
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChangeText('');
    onClear?.();
  };

  const handleBlur = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleFocus = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.subContainer}>
        <Search />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={isFocused ? '' : placeholder}
          style={styles.input}
          placeholderTextColor={
            isActive ? theme.colors.darkGreen : theme.colors.mediumGreen
          }
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </View>

      {value?.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Close />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
