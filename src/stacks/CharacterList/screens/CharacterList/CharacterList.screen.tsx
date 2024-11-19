import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import {theme} from '@/styles';
import {SearchBar} from '@/components';
import {Spacer} from '@/components/Spacer/Spacer.component';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<CharacterListStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={theme.typography.heading}>Characters</Text>
        <Spacer y={10} />
        <SearchBar />
      </View>
    </View>
  );
};

export default CharacterListScreen;
