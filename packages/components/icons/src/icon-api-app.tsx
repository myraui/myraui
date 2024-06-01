import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconApiApp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
      <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
      <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
      <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
    </>
  ),
  displayName: 'IconApiApp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
