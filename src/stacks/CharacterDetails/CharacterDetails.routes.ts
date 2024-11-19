import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Character} from '@/types';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: Character;
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
