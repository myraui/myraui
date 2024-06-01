import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWindElectricity = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 7l-3 5h4l-3 5" />
      <path d="M3 16h4a2 2 0 1 1 0 4" />
      <path d="M3 12h8a2 2 0 1 0 0 -4" />
      <path d="M3 8h3a2 2 0 1 0 0 -4" />
    </>
  ),
  displayName: 'IconWindElectricity',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
