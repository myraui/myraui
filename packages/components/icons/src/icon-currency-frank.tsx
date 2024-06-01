import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyFrank = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5h-6a2 2 0 0 0 -2 2v12" />
      <path d="M7 15h4" />
      <path d="M9 11h7" />
    </>
  ),
  displayName: 'IconCurrencyFrank',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
