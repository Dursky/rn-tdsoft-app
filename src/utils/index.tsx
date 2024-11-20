import {Spacer} from '@/components/Spacer';
import {theme} from '../styles';
import React from 'react';

export const getFlatListSpacer = () => <Spacer y={theme.spacing.lg} />;

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
