import { useState } from 'react';
import { Context, defaultValue } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { IGlobalContext } from 'context/types';

export const App = () => {
  const [state, setStateHook] = useState<IGlobalContext>(defaultValue);

  const setState = (key: keyof IGlobalContext, value: any) => {
    setStateHook({ ...state, [key]: value });
    localStorage.setItem(key, value);
  };

  return (
    <Context.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
};
