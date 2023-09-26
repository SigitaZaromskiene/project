import { createContext, useReducer } from "react";
import { main } from "./Reducers/main";
import {
  sectionList,
  sectionCreate,
  sectionDelete,
  sectionShowEdit,
} from "./actions";
import axios from "axios";
import { useMessages } from "./Use/useMessages";

export const actionsList = {
  list: sectionList,
  create: sectionCreate,
  delete: sectionDelete,
  edit: sectionShowEdit,
};

const url = "http://localhost:3008/";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(main, {
    page: "home",
    pageTop: "nav",
  });

  const [messages, setMessage] = useMessages();

  const doDispach = (action) => {
    dataDispach(action);
  };
  const dataDispach = (action) => {
    if (!action.payload || !action.payload.url) {
      dispatch(action);
    } else {
      const args = [url + action.payload.url];

      if (action.payload.body) {
        args.push(action.payload.body);
      }
      axios[action.payload.method](...args).then((res) => {
        action = {
          ...action,
          payload: { ...action.payload, ...res.data },
          doDispach,
        };
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
        messages: store.messages,
      }}
    >
      {children}
    </Store.Provider>
  );
};
