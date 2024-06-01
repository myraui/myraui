import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterE = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 4h-10v16h10" />
      <path d="M7 12l8 0" />
    </>
  ),
  displayName: 'IconLetterE',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
