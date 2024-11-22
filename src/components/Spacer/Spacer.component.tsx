import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  y?: number;
  x?: number;
};

export const Spacer = (props: SpacerProps) => {
  const {y, x} = props;

  return <View style={[{height: y, width: x ?? '100%'}]} />;
};

export default Spacer;
