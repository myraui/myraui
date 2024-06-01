import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandGitlab = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
    </>
  ),
  displayName: 'IconBrandGitlab',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
