import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLocationDiscount = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826" />
      <path d="M16 21l5 -5" />
      <path d="M21 21v.01" />
      <path d="M16 16v.01" />
    </>
  ),
  displayName: 'IconLocationDiscount',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
