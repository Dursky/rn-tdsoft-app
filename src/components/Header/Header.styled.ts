import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  image: {
    width: 105,
    height: 32,
  },
  container: {
    width: '100%',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
    backgroundColor: theme.colors.darkGreen,
  },
});
