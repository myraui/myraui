import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFlipHorizontal = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l18 0" />
      <path d="M7 16l10 0l-10 5l0 -5" />
      <path d="M7 8l10 0l-10 -5l0 5" />
    </>
  ),
  displayName: 'IconFlipHorizontal',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
