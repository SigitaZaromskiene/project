import {
  NAVIGATE,
  SECTIONS_LIST,
  REMOVE_MESSAGE,
  SECTIONS_CREATE,
} from "../Components/types";
import { v4 as uuidv4 } from "uuid";

export function main(state, action) {
  const copy = structuredClone(state);

  switch (action.type) {
    case SECTIONS_CREATE:
      const uuid = uuidv4();
      if (!copy.messages) {
        copy.messages = [];
      }
      copy.messages.push({ ...action.payload.msg, id: uuid });
      setTimeout(() => {
        action.doDispach({
          type: REMOVE_MESSAGE,
          payload: {
            uuid,
          },
        });
      }, 5000);
      return copy;

    case SECTIONS_LIST:
      copy.pageTop = "nav";
      copy.page = action.payload.page;
      copy.data = action.payload.data;
      return copy;

    case NAVIGATE:
      copy.page = action.payload.to;

      let defaultNav = "nav";

      switch (action.payload.to) {
        case "login":
        case "register":
          copy.pageTop = "";
          break;

        default:
          copy.pageTop = defaultNav;
      }

      return copy;
  }

  return state;
}
