'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Testing } from './Testing';

export default function Index() {
  return (
    <ThemeProvider>
      <Testing colorScheme="blue" />
    </ThemeProvider>
  );
}
