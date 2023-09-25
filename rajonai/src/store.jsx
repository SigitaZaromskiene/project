import { createContext, useReducer } from "react";
import { main } from "./Reducers/main";
import { sectionList } from "./actions";
import axios from "axios";

const actionsList = {
  ["list"]: sectionList,
};

const url = "http://localhost:3008/";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(main, {
    page: "home",
    pageTop: "nav",
  });

  const dataDispach = (action) => {
    if (!action.payload || !action.payload.url) {
      dispatch(action);
    } else {
      axios[action.payload.method](url + action.payload.url).then((res) => {
        action = { ...action, payload: { ...action.payload, ...res.data } };
        dispatch(action);
      });
    }
  };

  return (
    <Store.Provider
      value={{
        page: store.page,
        pageTop: store.pageTop,
        dispatch: dataDispach,
        store,
        actionsList,
      }}
    >
      {children}
    </Store.Provider>
  );
};
