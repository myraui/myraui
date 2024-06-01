import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEmphasis = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 5h-8v10h8m-1 -5h-7" />
      <path d="M6 20l0 .01" />
      <path d="M10 20l0 .01" />
      <path d="M14 20l0 .01" />
      <path d="M18 20l0 .01" />
    </>
  ),
  displayName: 'IconEmphasis',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
