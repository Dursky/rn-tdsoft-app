import {Image, Text, View} from 'react-native';
import React from 'react';
import {Character} from '@/types';
import {styles} from './CharacterCard.styled';
import {Button} from '@/components/Button';
import {Spacer} from '../Spacer';
import {theme} from '../../styles';

type CharacterCardProps = {
  item: Character;
  view?: 'detail' | 'basic';
};

export const CharacterCard = (props: CharacterCardProps) => {
  const {
    item: {name, status, species, image, origin, gender},
    view = 'basic',
  } = props;

  const isLike = false;

  return (
    <View style={view === 'detail' ? styles.detailContainer : styles.container}>
      {view === 'detail' ? (
        <>
          <Image source={{uri: image}} style={styles.detailImage} />
          <View style={styles.detailLabelsContainer}>
            <View style={styles.rowLabelContainer}>
              <Text style={styles.mainLabel}>NAME</Text>
              <Text style={styles.detailSubLabel}>{name}</Text>
            </View>
            <Spacer y={theme.spacing.md} />
            <View style={styles.statusContainer}>
              <View style={styles.detailLabelContainer}>
                <Text style={styles.mainLabel}>STATUS</Text>
                <Text style={styles.subLabel}>{status}</Text>
              </View>
              <Spacer x={theme.spacing.md} />
              <View style={styles.detailLabelContainer}>
                <Text style={styles.mainLabel}>ORIGIN</Text>
                <Text style={styles.subLabel}>{origin.name}</Text>
              </View>
            </View>
            <View style={styles.speciesContainer}>
              <View style={styles.detailLabelContainer}>
                <Text style={styles.mainLabel}>SPECIES</Text>
                <Text style={styles.subLabel}>{species}</Text>
              </View>
              <Spacer x={theme.spacing.md} />
              <View style={styles.detailLabelContainer}>
                <Text style={styles.mainLabel}>GENDER</Text>
                <Text style={styles.subLabel}>{gender}</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailButtonContainer}>
            <Button
              content={isLike ? 'REMOVE FROM LIKE' : 'ADD TO LIKED'}
              iconType={isLike ? 'gold' : 'whiteOutline'}
              variant="filled"
              style={
                isLike ? styles.likeDetailButton : styles.notLikeDetailButton
              }
            />
          </View>
        </>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default CharacterCard;
