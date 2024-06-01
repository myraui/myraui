import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPeace = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 12l6.3 6.3" />
      <path d="M12 12l-6.3 6.3" />
    </>
  ),
  displayName: 'IconPeace',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
