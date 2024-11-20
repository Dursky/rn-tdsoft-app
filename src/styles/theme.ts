export const getLetterSpacing = (fontSize: number, percentage: number) => {
  return fontSize * (percentage / 100);
};

export const theme = {
  colors: {
    primary: '#2B4332',
    secondary: '#162C1B',
    accent: '#F89F34',
    white: '#FFFFFF',
    transparent: 'transparent',

    mediumGreen: '#59695C',
    darkGreen: '#162C1B',
    greyshGreen: '#DAE4DC',
    lightGreen: '#F4F6F5',

    lightGrey: '#F4F6F5',
    greyGreen: '#59695C',

    danger: '#FF0000',
  },
  typography: {
    button: {
      fontSize: 14,
      color: '#FFFFFF',
      fontFamily: 'DMMono-Regular',
    },
    primary: {
      fontSize: 12,
      fontFamily: 'DMMono-Medium',
    },
    secondary: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
    heading: {
      fontSize: 36,
      fontFamily: 'Inter-Medium',
      letterSpacing: getLetterSpacing(36, -6),
    },
    placeholder: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    pill: 100,
    xs: 4,
  },
} as const;
