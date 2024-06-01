import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterWSmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </>
  ),
  displayName: 'IconLetterWSmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
