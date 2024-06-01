import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCreativeCommonsNd = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </>
  ),
  displayName: 'IconCreativeCommonsNd',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
