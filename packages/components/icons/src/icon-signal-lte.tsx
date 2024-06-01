import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSignalLte = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 8h-4v8h4" />
      <path d="M17 12h2.5" />
      <path d="M4 8v8h4" />
      <path d="M10 8h4" />
      <path d="M12 8v8" />
    </>
  ),
  displayName: 'IconSignalLte',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
