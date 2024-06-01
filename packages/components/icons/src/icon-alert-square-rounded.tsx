import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlertSquareRounded = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  displayName: 'IconAlertSquareRounded',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
