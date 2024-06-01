import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSkewX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5.205v13.59a1 1 0 0 0 1.184 .983l14 -2.625a1 1 0 0 0 .816 -.983v-8.34a1 1 0 0 0 -.816 -.983l-14 -2.625a1 1 0 0 0 -1.184 .983z" />
    </>
  ),
  displayName: 'IconSkewX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
