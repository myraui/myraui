import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandParsinta = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M21 12a9 9 0 0 0 -9 -9" opacity=".5" />
      <path d="M10 9v6l5 -3z" />
    </>
  ),
  displayName: 'IconBrandParsinta',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
