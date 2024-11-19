import React from 'react';
import {View} from 'react-native';
import {styles} from './Spacer.styled';

type SpacerProps = {
  y: number;
};

export const Spacer = (props: SpacerProps) => {
  const {y} = props;

  return <View style={[styles.container, {height: y}]} />;
};
