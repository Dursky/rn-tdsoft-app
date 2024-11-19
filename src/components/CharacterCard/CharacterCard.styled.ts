import {StyleSheet} from 'react-native';
import {theme} from '@/styles';
import {getLetterSpacing} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lightGreen,
    borderRadius: 24,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  rowLabelContainer: {
    padding: 8,
  },
  labelsContainer: {
    flex: 1,
  },
  image: {
    width: 220,
    height: 220,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: theme.spacing.lg,
  },
  buttonContainer: {position: 'absolute', right: 20, bottom: 20},
  likeButton: {
    backgroundColor: theme.colors.greyshGreen,
  },
  likeDetailButton: {
    backgroundColor: theme.colors.darkGreen,
  },
  notLikeButton: {
    backgroundColor: theme.colors.white,
  },
  notLikeDetailButton: {
    backgroundColor: theme.colors.primary,
  },
  mainLabel: {
    ...theme.typography.primary,
    color: theme.colors.mediumGreen,
  },
  subLabel: {
    ...theme.typography.secondary,
    color: theme.colors.darkGreen,
    letterSpacing: getLetterSpacing(16, -2),
  },
  detailSubLabel: {
    ...theme.typography.heading,
    color: theme.colors.darkGreen,
  },
  detailContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.lg,
    padding: theme.spacing.md,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.darkGreen,
  },
  detailImage: {
    width: '100%',
    height: 300,
    marginBottom: theme.spacing.md,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: theme.spacing.lg,
  },
  detailLabelsContainer: {
    width: '100%',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  speciesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailButtonContainer: {
    width: '100%',
    marginTop: 16,
  },
  detailLabelContainer: {
    padding: 8,
    backgroundColor: theme.colors.lightGrey,
    flex: 1,
    borderRadius: 10,
  },
});
