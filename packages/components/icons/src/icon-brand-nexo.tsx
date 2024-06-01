import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandNexo = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" />
      <path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
    </>
  ),
  displayName: 'IconBrandNexo',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
