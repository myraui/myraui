import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyYen = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19v-7l-5 -7m10 0l-5 7" />
      <path d="M8 17l8 0" />
      <path d="M8 13l8 0" />
    </>
  ),
  displayName: 'IconCurrencyYen',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
