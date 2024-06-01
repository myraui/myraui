import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleDotted = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7.5 4.21l0 .01" />
      <path d="M4.21 7.5l0 .01" />
      <path d="M3 12l0 .01" />
      <path d="M4.21 16.5l0 .01" />
      <path d="M7.5 19.79l0 .01" />
      <path d="M12 21l0 .01" />
      <path d="M16.5 19.79l0 .01" />
      <path d="M19.79 16.5l0 .01" />
      <path d="M21 12l0 .01" />
      <path d="M19.79 7.5l0 .01" />
      <path d="M16.5 4.21l0 .01" />
      <path d="M12 3l0 .01" />
    </>
  ),
  displayName: 'IconCircleDotted',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
