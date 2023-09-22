import { NAVIGATE } from "../Components/types";

export function main(state, action) {
  const copy = structuredClone(state);

  switch (action.type) {
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
