import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.pill,
    paddingHorizontal: theme.spacing.md,
    borderColor: theme.colors.darkGreen,
    borderWidth: 1,
    width: '100%',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  input: theme.typography.placeholder,
  clearButton: {
    backgroundColor: theme.colors.greyshGreen,
    borderRadius: theme.borderRadius.xs,
  },
});
