import React from 'react';
import './global.css';
import { eudoxusSans } from '@myraui/fonts';
import { MyraUIProvider } from '@myraui/react';

export const metadata = {
  title: 'Myra UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={eudoxusSans.className} suppressHydrationWarning>
      <head></head>
      <body>
        <MyraUIProvider>{children}</MyraUIProvider>
      </body>
    </html>
  );
}
