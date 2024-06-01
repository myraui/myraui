import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyRenminbi = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 9v8a2 2 0 1 0 4 0" />
      <path d="M19 9h-14" />
      <path d="M19 5h-14" />
      <path d="M9 9v4c0 2.5 -.667 4 -2 6" />
    </>
  ),
  displayName: 'IconCurrencyRenminbi',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
