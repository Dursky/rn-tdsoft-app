import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGreen,
  },
  heading: {
    paddingLeft: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
});
