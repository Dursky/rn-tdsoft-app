import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle, View} from 'react-native';
import {Star} from '@/icons';
import {styles} from './Button.styled';

type buttonType = 'search' | 'addToLike' | 'removeFromLiked' | 'like';

type ButtonProps = {
  variant?: 'filled' | 'outlined';
  type?: buttonType;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    type = 'search',
    onPress,
    style,
    textStyle,
  } = props;

  const buttonTexts: Record<buttonType, string> = {
    search: 'SEARCH',
    addToLike: 'ADD TO LIKE',
    removeFromLiked: 'REMOVE FROM LIKED',
    like: 'LIKE',
  };

  const buttonIcons: Record<buttonType, React.ReactNode | null> = {
    search: null,
    addToLike: <Star color="white" />,
    removeFromLiked: <Star color="accent" fillColor="accent" />,
    like: null,
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outlined' ? styles.outlined : styles.filled,
        style,
      ]}
      onPress={onPress}>
      {buttonIcons[type]}
      <View style={styles.spacer} />
      <Text
        style={[
          styles.text,
          variant === 'outlined' ? styles.textOutlined : styles.textFilled,
          textStyle,
        ]}>
        {buttonTexts[type]}
      </Text>
    </TouchableOpacity>
  );
};
