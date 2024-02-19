import { myra } from '@myra-ui/react';
import React from 'react';
import { useTheme } from 'next-themes';

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <myra.div className="h-screen flex flex-col p-2">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div>Global</div>
      <myra.div className="h-24 grid grid-cols-12">
        <div className="items-center justify-center flex bg-primary-8">Primary</div>
        <div className="items-center justify-center flex bg-secondary-8">Secondary</div>
        <div className="items-center justify-center flex bg-accent-8">Accent</div>
        <div className="items-center justify-center flex bg-text-8">Text</div>
        <div className="items-center justify-center flex bg-neutral-8">Neutral</div>
        <div className="items-center justify-center flex bg-danger-8">Danger</div>
        <div className="items-center justify-center flex bg-warning-8">Warning</div>
        <div className="items-center justify-center flex bg-info-8">Info</div>
        <div className="items-center justify-center flex bg-success-8">Success</div>
        <div className="items-center justify-center flex bg-overlay-8">Overlay</div>
        <div className="items-center justify-center flex bg-focus-8">Focus</div>
        <div className="items-center justify-center flex bg-divider-8">Divider</div>
      </myra.div>
      <div>Local</div>
      <myra.div className="h-24 grid grid-cols-2" themeColors={{ primary: 'blue', accent: { _dark: 'pink.12', _light: 'red.9' } }}>
        <div className="items-center justify-center flex bg-primary">Primary</div>
        <div className="items-center justify-center flex bg-accent">Accent</div>
      </myra.div>
      <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox</p>
      <div className="h-24 w-24 m-4" style={{ background: 'red' }}>
        Some box
      </div>
    </myra.div>
  );
};

interface TestingProps {
  colorScheme: string;
}
