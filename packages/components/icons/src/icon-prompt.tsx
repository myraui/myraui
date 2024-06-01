import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPrompt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7l5 5l-5 5" />
      <path d="M13 17l6 0" />
    </>
  ),
  displayName: 'IconPrompt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
