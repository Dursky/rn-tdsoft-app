import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Search = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M13 13l4 4m-2-8A6 6 0 113 9a6 6 0 0112 0z"
      stroke="#162C1B"
      strokeWidth={1.5}
    />
  </Svg>
);

export default Search;
