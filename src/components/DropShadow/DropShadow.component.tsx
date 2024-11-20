import React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {styles} from './DropShadow.styled';

type DropShadowProps = {
  children: React.ReactNode;
  shadowColor?: string;
  offset?: number;
  containerStyle?: ViewStyle;
  borderRadius?: number;
};

export const DropShadow = (props: DropShadowProps) => {
  const {  children,
    shadowColor = '#000',
    offset = 4,
    containerStyle = {},
    borderRadius = 0} = props
  return (
    <View style={[styles.container, {borderRadius}, containerStyle]}>
      <Svg
        style={[StyleSheet.absoluteFillObject, {top: offset, left: offset}]}
        width="100%"
        height="100%">
        <Rect
          width="100%"
          height="100%"
          fill={shadowColor}
          rx={borderRadius}
          ry={borderRadius}
        />
      </Svg>
      {children}
    </View>
  );
};
