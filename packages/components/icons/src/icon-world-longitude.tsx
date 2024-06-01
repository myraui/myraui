import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWorldLongitude = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M11.5 3a11.2 11.2 0 0 0 0 18" />
      <path d="M12.5 3a11.2 11.2 0 0 1 0 18" />
      <path d="M12 3l0 18" />
    </>
  ),
  displayName: 'IconWorldLongitude',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
