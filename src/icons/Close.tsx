import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Close = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path d="M5 5l10 10M5 15L15 5" stroke="#162C1B" strokeWidth={1.5} />
    </Svg>
  );
};

export default Close;
