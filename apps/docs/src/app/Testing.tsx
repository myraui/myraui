import { myra } from '@myra-ui/react';
import React from 'react';
import { useTheme } from 'next-themes';

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <myra.div className="h-screen flex flex-col" actionColor="pink">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <myra.div className="h-24 grid grid-cols-3" actionColor="red">
        <div className="items-center justify-center flex bg-neutral-8">Neutral</div>
        <div className="items-center justify-center flex bg-action-8">Action</div>
        <div className="items-center justify-center flex bg-foreground-8">Foreground</div>
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
