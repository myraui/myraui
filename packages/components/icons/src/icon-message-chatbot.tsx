import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMessageChatbot = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
      <path d="M9.5 9h.01" />
      <path d="M14.5 9h.01" />
      <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
    </>
  ),
  displayName: 'IconMessageChatbot',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
