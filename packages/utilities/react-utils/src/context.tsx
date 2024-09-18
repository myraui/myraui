import React, { createContext as createReactContext, useContext as useReactContext } from 'react';

export interface CreateContextOptions<T> {
  strict?: boolean;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  name?: string;
  defaultValue?: T;
}

export type CreateContextReturn<T> = T extends CreateContextOptions<infer Value>
  ? [React.Provider<Value>, () => Value, React.Context<Value>]
  : unknown;

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext<Value, O extends CreateContextOptions<Value> = CreateContextOptions<Value>>(options?: O): CreateContextReturn<O> {
  const { name, strict = true, hookName = 'useContext', providerName = 'Provider', errorMessage, defaultValue } = options || {};

  const Context = createReactContext<Value | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);

    if (!context && strict) {
      const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
      error.name = 'ContextError';
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as any;
}
