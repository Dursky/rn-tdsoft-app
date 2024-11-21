import {StyleSheet} from 'react-native';
import {theme} from '@/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  filterButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.padding.sm,
    paddingHorizontal: theme.padding.md,
    borderRadius: theme.borderRadius.pill,
    minWidth: 120,
    gap: theme.spacing.sm,
    width: 115,
  },

  filterText: theme.typography.button,
  animatedContainer: {
    position: 'absolute',
    width: '100%',
  },
  optionsContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.lg,
    padding: theme.padding.lg,
    gap: theme.spacing.lg,
    height: '100%',
  },
  optionsContent: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: theme.spacing.lg,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  optionsList: {
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
});
