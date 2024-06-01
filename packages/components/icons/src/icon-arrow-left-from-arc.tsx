import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowLeftFromArc = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 12h12" />
      <path d="M17 16l4 -4l-4 -4" />
      <path d="M12 3a9 9 0 1 0 0 18" />
    </>
  ),
  displayName: 'IconArrowLeftFromArc',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
