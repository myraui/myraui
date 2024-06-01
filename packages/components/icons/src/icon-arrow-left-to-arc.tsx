import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLeftToArc = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 12h-12" />
      <path d="M13 16l-4 -4l4 -4" />
      <path d="M12 3a9 9 0 1 0 0 18" />
    </>
  ),
  displayName: 'IconArrowLeftToArc',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
