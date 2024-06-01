import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconColumns = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l5.5 0" />
      <path d="M4 10l5.5 0" />
      <path d="M4 14l5.5 0" />
      <path d="M4 18l5.5 0" />
      <path d="M14.5 6l5.5 0" />
      <path d="M14.5 10l5.5 0" />
      <path d="M14.5 14l5.5 0" />
      <path d="M14.5 18l5.5 0" />
    </>
  ),
  displayName: 'IconColumns',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
