import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRightToArc = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h12" />
      <path d="M11 8l4 4l-4 4" />
      <path d="M12 21a9 9 0 0 0 0 -18" />
    </>
  ),
  displayName: 'IconArrowRightToArc',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
