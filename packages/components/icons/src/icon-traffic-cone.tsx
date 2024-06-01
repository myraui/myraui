import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrafficCone = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20l16 0" />
      <path d="M9.4 10l5.2 0" />
      <path d="M7.8 15l8.4 0" />
      <path d="M6 20l5 -15h2l5 15" />
    </>
  ),
  displayName: 'IconTrafficCone',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
