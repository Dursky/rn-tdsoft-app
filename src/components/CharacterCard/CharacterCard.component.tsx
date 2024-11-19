import {Image, Text, View} from 'react-native';
import React from 'react';
import {Character} from '@/types';
import {styles} from './CharacterCard.styled';
import {Button} from '@/components/Button';

type CharacterCardProps = {
  item: Character;
};

export const CharacterCard = (props: CharacterCardProps) => {
  const {
    item: {name, status, species, image},
  } = props;

  const isLike = false;

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <View style={styles.rowLabelContainer}>
          <Text style={styles.mainLabel}>NAME</Text>
          <Text style={styles.subLabel}>{name}</Text>
        </View>
        <View style={styles.rowLabelContainer}>
          <Text style={styles.mainLabel}>STATUS</Text>
          <Text style={styles.subLabel}>{status}</Text>
        </View>
        <View style={styles.rowLabelContainer}>
          <Text style={styles.mainLabel}>SPECIES</Text>
          <Text style={styles.subLabel}>{species}</Text>
        </View>
      </View>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          content="LIKE"
          iconType={isLike ? 'gold' : 'greenOutline'}
          variant="outlined"
          style={isLike ? styles.likeButton : styles.notLikeButton}
        />
      </View>
    </View>
  );
};

export default CharacterCard;
