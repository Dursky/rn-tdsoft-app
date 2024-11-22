import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '@/styles';

type StarProps = {
  color?: keyof typeof theme.colors;
  fillColor?: keyof typeof theme.colors;
  disabled?: boolean;
};

export const Star = (props: StarProps) => {
  const {color = 'primary', fillColor = 'transparent', disabled} = props;

  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill={disabled ? theme.colors.greyshGreen : theme.colors[fillColor]}>
      <Path
        d="M7.653 2.333a.375.375 0 01.694 0L9.763 5.74a.375.375 0 00.317.23l3.679.295a.375.375 0 01.214.658L11.17 9.325a.376.376 0 00-.121.371l.856 3.59a.375.375 0 01-.56.407l-3.15-1.924a.375.375 0 00-.39 0l-3.15 1.924a.374.374 0 01-.56-.406l.856-3.591a.375.375 0 00-.121-.371L2.027 6.923a.375.375 0 01.214-.658L5.92 5.97a.375.375 0 00.317-.23l1.416-3.407z"
        stroke={disabled ? theme.colors.greyshGreen : theme.colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Star;
