import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    paddingLeft: theme.padding.md,
    paddingTop: theme.padding.md,
    paddingRight: theme.padding.md,
  },
  list: {
    backgroundColor: theme.colors.lightGreen,
  },
  listContent: {
    padding: theme.padding.md,
  },
  link: {
    padding: theme.padding.md,
  },
  tabBarStyle: {display: 'none'},
});
