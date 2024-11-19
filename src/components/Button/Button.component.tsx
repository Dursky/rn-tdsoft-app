import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle, View} from 'react-native';
import {Star} from '@/icons';
import {styles} from './Button.styled';

type iconType = 'whiteOutline' | 'greenOutline' | 'gold';
type ButtonProps = {
  variant?: 'filled' | 'outlined';
  iconType?: iconType;
  content?: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    iconType,
    content = 'Button',
    onPress,
    style,
    textStyle,
  } = props;

  const buttonIcons: Record<iconType, React.ReactNode> = {
    whiteOutline: <Star color="white" />,
    greenOutline: <Star color="primary" />,
    gold: <Star color="accent" fillColor="accent" />,
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outlined' ? styles.outlined : styles.filled,
        style,
      ]}
      onPress={onPress}>
      {iconType ? buttonIcons[iconType] : null}
      <View style={styles.spacer} />
      <Text
        style={[
          styles.text,
          variant === 'outlined' ? styles.textOutlined : styles.textFilled,
          textStyle,
        ]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
