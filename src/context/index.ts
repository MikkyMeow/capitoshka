import { createContext, useContext } from "react";
import { IGlobalContext } from "./types";

export type GlobalContent = {
  state: IGlobalContext;
  setState: (key: keyof IGlobalContext, value: any) => void;
};

export const defaultValue = {
  state: 'state',
};

export const Context = createContext<GlobalContent>({
  state: defaultValue,
  setState: () => {},
});

export const useGlobalContext = () => useContext(Context);

export const clearState = (setState: (c: IGlobalContext) => void) => {
  setState(defaultValue);
};
