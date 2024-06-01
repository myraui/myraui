import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyFlorin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12h8" />
      <path d="M7 19c1.213 0 2.31 -.723 2.788 -1.838l4.424 -10.324a3.033 3.033 0 0 1 2.788 -1.838" />
    </>
  ),
  displayName: 'IconCurrencyFlorin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
