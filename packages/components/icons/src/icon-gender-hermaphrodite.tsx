import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGenderHermaphrodite = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 14v7" />
      <path d="M9 18h6" />
      <path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
      <path d="M15 3a3 3 0 1 1 -6 0" />
    </>
  ),
  displayName: 'IconGenderHermaphrodite',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
