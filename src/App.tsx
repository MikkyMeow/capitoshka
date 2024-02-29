import { useState } from 'react';
import { IGlobalContext, MyGlobalContext, defaultValue } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/app/router/paths';
import { vttGenerator } from 'helpers/vttGenerator';
import { episode1 } from 'content/treePlusOne/season1/episode1';



export const App = () => {
  const [state, setStateHook] = useState<IGlobalContext>(defaultValue);
  const setState = (key: keyof IGlobalContext, value: any) => {
    setStateHook({ ...state, [key]: value });
    localStorage.setItem(key, value);
  };

  console.log(vttGenerator(episode1));

  return (
    
    <MyGlobalContext.Provider value={{ state, setState }}>
      <RouterProvider 
      router={router} 
       />
    </MyGlobalContext.Provider>
           
  );
};
