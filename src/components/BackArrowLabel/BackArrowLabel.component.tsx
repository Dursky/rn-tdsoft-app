import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './BackArrowLabel.styled';

type BackArrowLabelProps = {
  onPress?: () => void;
};

export const BackArrowLabel = (props: BackArrowLabelProps) => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{'<- Go back to Characters List'}</Text>
    </TouchableOpacity>
  );
};

export default BackArrowLabel;
