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
  list: {
    backgroundColor: theme.colors.lightGreen,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  nullHeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  textPlacing: {
    textAlign: 'center',
  },
});
