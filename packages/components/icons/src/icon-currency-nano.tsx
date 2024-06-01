import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyNano = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 20l10 -16" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
      <path d="M17 20l-10 -16" />
    </>
  ),
  displayName: 'IconCurrencyNano',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
