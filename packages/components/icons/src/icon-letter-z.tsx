import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterZ = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4h10l-10 16h10" />
    </>
  ),
  displayName: 'IconLetterZ',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
