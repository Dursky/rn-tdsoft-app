import {theme} from '@/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  checkbox: {
    width: 16,
    height: theme.spacing.md,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noChecked: {
    borderColor: theme.colors.greyshGreen,
    borderWidth: 2,
  },
  checked: {
    backgroundColor: theme.colors.primary,
  },
  disabled: {
    borderColor: 'grey',
  },
  label: {
    fontSize: 16,
  },
  disabledText: {
    color: 'grey',
  },
});
