import React from 'react';
import {TouchableOpacity, View, Text, ViewStyle} from 'react-native';
import {styles} from './Checkbox.styled';
import {Check} from '@/icons';

type CheckboxProps = {
  checked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  label?: string;
};

export const Checkbox = ({
  checked,
  onPress,
  style,
  disabled,
  label,
}: CheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style]}>
      <View
        style={[
          styles.checkbox,
          checked ? styles.checked : styles.noChecked,
          disabled && styles.disabled,
        ]}>
        {checked ? <Check /> : null}
      </View>
      {label && (
        <Text style={[styles.label, disabled && styles.disabledText]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
