import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Check} from '@/icons';
import {styles} from './Checkbox.styled';

type CheckboxProps = {
  checked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
};

export const Checkbox = (props: CheckboxProps) => {
  const {checked, onPress, style, disabled} = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        checked && styles.containerChecked,
        disabled && styles.containerDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      {checked ? <Check /> : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
