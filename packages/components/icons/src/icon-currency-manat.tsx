import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyManat = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 19v-7a5 5 0 1 1 10 0v7" />
      <path d="M12 5v14" />
    </>
  ),
  displayName: 'IconCurrencyManat',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
