import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCreativeCommonsZero = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 12m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
      <path d="M14 9l-4 6" />
    </>
  ),
  displayName: 'IconCreativeCommonsZero',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
