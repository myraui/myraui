import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSkewY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.326 19h15.348a1 1 0 0 0 .962 -1.275l-3.429 -12a1 1 0 0 0 -.961 -.725h-8.492a1 1 0 0 0 -.961 .725l-3.429 12a1 1 0 0 0 .962 1.275z" />
    </>
  ),
  displayName: 'IconSkewY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
