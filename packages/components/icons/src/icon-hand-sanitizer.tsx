import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHandSanitizer = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" />
      <path d="M15 3h-6a2 2 0 0 0 -2 2" />
      <path d="M12 3v5" />
      <path d="M12 11v4" />
      <path d="M10 13h4" />
    </>
  ),
  displayName: 'IconHandSanitizer',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
