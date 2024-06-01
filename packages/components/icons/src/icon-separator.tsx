import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSeparator = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l0 .01" />
      <path d="M7 12l10 0" />
      <path d="M21 12l0 .01" />
    </>
  ),
  displayName: 'IconSeparator',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
