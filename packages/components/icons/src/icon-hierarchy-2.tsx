import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHierarchy2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 3h4v4h-4z" />
      <path d="M3 17h4v4h-4z" />
      <path d="M17 17h4v4h-4z" />
      <path d="M7 17l5 -4l5 4" />
      <path d="M12 7l0 6" />
    </>
  ),
  displayName: 'IconHierarchy2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
