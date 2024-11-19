import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';
import {CharacterCard} from '@/components/CharacterCard';
import {mockData} from '@/utils/mock';

const getFlatListSpacer = () => <Spacer y={theme.spacing.lg} />;

const CharacterListScreen = () => {
  const {navigate} = useNavigation<CharacterListStackNavigationProp>();

  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={theme.typography.heading}>Characters</Text>
        <Spacer y={10} />
        <SearchBar
          onChangeText={text => setSearchValue(text)}
          value={searchValue}
        />
      </View>
      {/* TODO: Add filter*/}
      <Spacer y={theme.spacing.md} />
      <FlatList
        data={mockData}
        style={styles.list}
        ItemSeparatorComponent={getFlatListSpacer}
        renderItem={({item}) => <CharacterCard item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default CharacterListScreen;
