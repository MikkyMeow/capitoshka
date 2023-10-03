import { createContext, useContext } from "react";

export interface IGlobalContext {
  series: string;
  season: string;
  episode: string;
}

export type GlobalContent = {
  state: IGlobalContext;
  setState: (key: keyof IGlobalContext, value: any) => void;
};

export const defaultValue = {
  series: localStorage.getItem("series") || "",
  season: localStorage.getItem("season") || "",
  episode: localStorage.getItem("episode") || "",
};

export const MyGlobalContext = createContext<GlobalContent>({
  state: defaultValue,
  setState: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

export const clearState = (setState: (c: IGlobalContext) => void) => {
  setState(defaultValue);
};
