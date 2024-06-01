import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandGrammarly = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" />
      <path d="M13.5 14h2.5v2.5" />
    </>
  ),
  displayName: 'IconBrandGrammarly',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
