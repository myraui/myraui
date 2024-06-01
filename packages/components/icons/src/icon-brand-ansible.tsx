import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandAnsible = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9.647 12.294l6.353 3.706l-4 -9l-4 9" />
    </>
  ),
  displayName: 'IconBrandAnsible',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
