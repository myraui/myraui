import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowAutofitContentFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6.707 3.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293h4.585a1 1 0 0 1 .117 1.993l-.117 .007h-4.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-3 -3a1.008 1.008 0 0 1 -.097 -.112l-.071 -.11l-.054 -.114l-.035 -.105l-.025 -.118l-.007 -.058l-.004 -.09l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.064 -.092l.083 -.094l3 -3a1 1 0 0 1 1.414 0z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconArrowAutofitContentFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
