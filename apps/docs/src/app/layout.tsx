import React from 'react';
import './global.css';
import { eudoxusSans } from '@myra-ui/fonts';

export const metadata = {
  title: 'Myra UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={eudoxusSans.className}>
        <head>
        </head>
        <body>
          <div className="bg-blue-500">{children}</div>
        </body>
      </html>
  );
}
