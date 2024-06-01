import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterYSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8l2 5l2 -5" />
      <path d="M12 16v-3" />
    </>
  ),
  displayName: 'IconLetterYSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
