import {
  NAVIGATE,
  SECTIONS_LIST,
  REMOVE_MESSAGE,
  SECTIONS_CREATE,
  SECTIONS_DELETE,
  SECTIONS_SHOW_EDIT,
} from "../Components/types";
import { actionsList } from "../store";
import { v4 as uuidv4 } from "uuid";

export function main(state, action) {
  const copy = structuredClone(state);

  switch (action.type) {
    case REMOVE_MESSAGE:
      copy.messages = copy.messages.filter((m) => m.id !== action.payload.uuid);
      return copy;
    case SECTIONS_CREATE:
    case SECTIONS_DELETE:
      if (action.payload.msg) {
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
        }, 3000);
      }

      if (action.payload.show) {
        setTimeout(() => {
          action.doDispach(actionsList[action.payload.show]());
        }, 1000);
      }
      return copy;

    case SECTIONS_LIST:
    case SECTIONS_SHOW_EDIT:
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
