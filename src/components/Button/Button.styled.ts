import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.pill,
    minWidth: 120,
  },
  spacer: {
    height: '100%',
    width: theme.spacing.xs,
  },
  filled: {
    backgroundColor: theme.colors.primary,
  },
  outlined: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  text: {
    ...theme.typography.button,
  },
  textFilled: {
    color: theme.colors.white,
  },
  textOutlined: {
    color: theme.colors.primary,
  },
  icon: {
    marginRight: theme.spacing.sm,
  },
});
