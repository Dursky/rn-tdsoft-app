import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGreen,
  },
  heading: {
    paddingLeft: theme.padding.md,
    paddingTop: theme.padding.md,
    paddingRight: theme.padding.md,
  },
  list: {
    backgroundColor: theme.colors.lightGreen,
    paddingLeft: theme.padding.md,
    paddingRight: theme.padding.md,
    paddingBottom: theme.padding.md,
  },
  errorText: {
    color: theme.colors.danger,
    textAlign: 'center',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
