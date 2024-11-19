import React from 'react';
import {Image, View} from 'react-native';
import {images} from '@assets';
import {styles} from './HEader.styled';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={images.rickAndMortyLogo} style={styles.image} />
    </View>
  );
};

export default Header;
