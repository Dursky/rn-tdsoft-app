import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './Footer.styled';
import {images} from '@assets';

export const Footer = () => {
  console.log(images.rickAndMortyLogo);
  return (
    <View style={styles.container}>
      <Image source={images.rickAndMortyLogo} />
    </View>
  );
};
