import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyTenge = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 5h12" />
      <path d="M6 9h12" />
      <path d="M12 9v10" />
    </>
  ),
  displayName: 'IconCurrencyTenge',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
