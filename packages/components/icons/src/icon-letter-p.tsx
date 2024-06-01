import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterP = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
    </>
  ),
  displayName: 'IconLetterP',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
