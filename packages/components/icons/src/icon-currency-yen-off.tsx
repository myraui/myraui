import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyYenOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19v-7m5 -7l-3.328 4.66" />
      <path d="M8 17h8" />
      <path d="M8 13h5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCurrencyYenOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
