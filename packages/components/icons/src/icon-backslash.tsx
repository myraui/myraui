import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBackslash = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 5l10 14" />
    </>
  ),
  displayName: 'IconBackslash',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
