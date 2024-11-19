import {FlatList, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {CharacterCard} from '@/components/CharacterCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Character} from '@/types';
import {getFlatListSpacer} from '@/utils';
import {BackArrowLabel} from '@/components/BackArrowLabel';
import {Spacer} from '@/components/Spacer';
import {theme} from '../../../../styles';

const CharacterDetailsScreen = () => {
  const {params} = useRoute();
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.link}>
        <BackArrowLabel onPress={() => goBack()} />
      </View>

      <FlatList
        data={[params as Character]}
        style={styles.list}
        ItemSeparatorComponent={getFlatListSpacer}
        renderItem={({item}) => (
          <CharacterCard item={item} disabled view="detail" />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <Spacer y={theme.spacing.md} />
    </View>
  );
};

export default CharacterDetailsScreen;
