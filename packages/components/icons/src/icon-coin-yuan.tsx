import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCoinYuan = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 13h6" />
      <path d="M9 8l3 4.5" />
      <path d="M15 8l-3 4.5v4.5" />
    </>
  ),
  displayName: 'IconCoinYuan',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
