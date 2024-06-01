import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTallymarks = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 5l0 14" />
      <path d="M10 5l0 14" />
      <path d="M14 5l0 14" />
      <path d="M18 5l0 14" />
      <path d="M3 17l18 -10" />
    </>
  ),
  displayName: 'IconTallymarks',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
