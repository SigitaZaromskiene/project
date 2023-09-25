import { NAVIGATE, SECTIONS_LIST } from "./Components/types";

export const navigate = (to) => {
  return {
    type: NAVIGATE,
    payload: {
      to,
    },
  };
};

export const sectionList = () => {
  return {
    type: SECTIONS_LIST,
    payload: {
      url: "admin/sections",
      method: "get",
      page: "list",
    },
  };
};
