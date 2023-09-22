import { createContext, useReducer } from "react";
import { main } from "./Reducers/main";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(main, {
    page: "home",
    pageTop: "nav",
  });

  return (
    <Store.Provider
      value={{ page: store.page, pageTop: store.pageTop, dispatch }}
    >
      {children}
    </Store.Provider>
  );
};
