import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandCodepen = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
      <path d="M3 9l0 6" />
      <path d="M21 9l0 6" />
      <path d="M12 3l0 6" />
      <path d="M12 15l0 6" />
    </>
  ),
  displayName: 'IconBrandCodepen',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
