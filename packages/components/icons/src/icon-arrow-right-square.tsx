import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRightSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 12l14 0" />
      <path d="M18 15l3 -3l-3 -3" />
      <path d="M3 10h4v4h-4z" />
    </>
  ),
  displayName: 'IconArrowRightSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
