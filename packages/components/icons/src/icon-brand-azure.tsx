import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandAzure = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 7.5l-4 9.5h4l6 -15z" />
      <path d="M22 20l-7 -15l-3 7l4 5l-8 3z" />
    </>
  ),
  displayName: 'IconBrandAzure',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
