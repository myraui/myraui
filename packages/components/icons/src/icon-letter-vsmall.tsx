import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterVSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8l2 8l2 -8" />
    </>
  ),
  displayName: 'IconLetterVSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
