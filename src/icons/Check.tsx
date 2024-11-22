import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Check = () => {
  return (
    <Svg width={13} height={9} viewBox="0 0 13 9" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.806.234a.8.8 0 010 1.132L5.017 8.154a.808.808 0 01-.043.04.8.8 0 01-1.214.097L.234 4.766a.8.8 0 011.132-1.132L4.32 6.59 10.674.234a.8.8 0 011.132 0z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Check;
