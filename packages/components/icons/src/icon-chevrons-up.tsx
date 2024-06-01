import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 11l5 -5l5 5" />
      <path d="M7 17l5 -5l5 5" />
    </>
  ),
  displayName: 'IconChevronsUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
