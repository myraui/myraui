import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMergeAltRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 7l-4 -4l-4 4" />
      <path d="M6 21v.01" />
      <path d="M6 18.01v.01" />
      <path d="M7 15.02v.01" />
      <path d="M10 13.03v.01" />
      <path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" />
    </>
  ),
  displayName: 'IconArrowMergeAltRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
