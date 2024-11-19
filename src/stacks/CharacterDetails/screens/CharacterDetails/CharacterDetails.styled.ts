import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    paddingLeft: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  list: {
    backgroundColor: theme.colors.lightGreen,
  },
  listContent: {
    padding: theme.spacing.md,
  },
  link: {
    padding: theme.spacing.md,
  },
});
