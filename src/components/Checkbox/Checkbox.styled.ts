import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  containerChecked: {
    backgroundColor: theme.colors.darkGreen,
  },
  containerDisabled: {
    opacity: 0.5,
  },
});
