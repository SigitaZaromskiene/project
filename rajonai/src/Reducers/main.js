import { NAVIGATE, SECTIONS_LIST } from "../Components/types";

export function main(state, action) {
  const copy = structuredClone(state);

  switch (action.type) {
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
