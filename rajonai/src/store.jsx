import { createContext } from "react";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  return <Store.Provider>{children}</Store.Provider>;
};
