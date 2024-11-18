import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {Star} from '@/icons';
import {styles} from './Tab.styled';
import Person from '@/icons/Person';
import {theme} from '@/styles';

type TabProps = {
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  selected?: boolean;
  type: 'allCharacters' | 'likedCharacters';
  active?: boolean;
};

export const Tab = (props: TabProps) => {
  const {onPress, disabled, type = 'allCharacters', active} = props;

  const tabContent = {
    allCharacters: {
      icon: <Person />,
      text: 'ALL CHARACTERS',
    },
    likedCharacters: {
      icon: <Star fillColor={active ? 'white' : 'greyshGreen'} />,
      text: 'LIKED CHARACTERS',
    },
  };

  return (
    <TouchableOpacity
      style={[styles.container, active && styles.activeBorder]}
      onPress={onPress}
      disabled={disabled}>
      {tabContent[type].icon}
      <Text
        style={[
          theme.typography.button,
          active ? styles.active : styles.inActive,
        ]}>
        {tabContent[type].text}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
