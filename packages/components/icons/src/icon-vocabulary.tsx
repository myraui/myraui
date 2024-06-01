import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconVocabulary = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
      <path d="M12 5v16" />
      <path d="M7 7h1" />
      <path d="M7 11h1" />
      <path d="M16 7h1" />
      <path d="M16 11h1" />
      <path d="M16 15h1" />
    </>
  ),
  displayName: 'IconVocabulary',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
