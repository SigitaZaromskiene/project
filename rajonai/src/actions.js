import { NAVIGATE, SECTIONS_LIST, SECTIONS_CREATE } from "./Components/types";

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

export const sectionCreate = (body) => {
  return {
    type: SECTIONS_CREATE,
    payload: {
      url: "admin/sections",
      method: "post",
      body,
    },
  };
};
