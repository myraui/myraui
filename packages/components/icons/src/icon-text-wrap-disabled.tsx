import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextWrapDisabled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l10 0" />
      <path d="M4 18l10 0" />
      <path d="M4 12h17l-3 -3m0 6l3 -3" />
    </>
  ),
  displayName: 'IconTextWrapDisabled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
