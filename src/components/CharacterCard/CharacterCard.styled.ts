import {StyleSheet} from 'react-native';
import {theme} from '../../styles';
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
  notLikeButton: {
    backgroundColor: theme.colors.white,
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
});
