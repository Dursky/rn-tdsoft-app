import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkGreen,
  },
  active: {
    color: theme.colors.white,
  },
  inActive: {
    color: theme.colors.greyshGreen,
  },
  activeBorder: {
    borderStyle: 'solid',
    borderColor: theme.colors.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
});