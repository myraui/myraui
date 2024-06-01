import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandSuperhuman = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 12l4 3l-8 7l-8 -7l4 -3" />
      <path d="M12 3l-8 6l8 6l8 -6z" />
      <path d="M12 15h8" />
    </>
  ),
  displayName: 'IconBrandSuperhuman',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
