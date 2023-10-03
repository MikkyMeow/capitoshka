import { useState } from "react";
import { IGlobalContext, MyGlobalContext, defaultValue } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/app/router/paths";

export const App = () => {
  const [state, setStateHook] = useState<IGlobalContext>(defaultValue);

  const setState = (key: keyof IGlobalContext, value: any) => {
    setStateHook({ ...state, [key]: value });
    localStorage.setItem(key, value);
  };

  return (
    <MyGlobalContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </MyGlobalContext.Provider>
  );
};
