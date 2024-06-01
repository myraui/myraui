import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEyeTable = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 18h-.011" />
      <path d="M12 18h-.011" />
      <path d="M16 18h-.011" />
      <path d="M4 3h16" />
      <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
      <path d="M14 7h-4" />
      <path d="M9 15h1" />
      <path d="M14 15h1" />
      <path d="M12 11v-4" />
    </>
  ),
  displayName: 'IconEyeTable',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
