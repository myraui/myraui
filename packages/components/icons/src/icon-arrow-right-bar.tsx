import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRightBar = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 15l3 -3l-3 -3" />
      <path d="M3 12h18" />
      <path d="M3 9v6" />
    </>
  ),
  displayName: 'IconArrowRightBar',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
