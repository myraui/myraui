import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSectionSign = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.172 19a3 3 0 1 0 2.828 -4" />
      <path d="M14.83 5a3 3 0 1 0 -2.83 4" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </>
  ),
  displayName: 'IconSectionSign',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
