import {
  NAVIGATE,
  SECTIONS_LIST,
  SECTIONS_CREATE,
  SECTIONS_DELETE,
} from "./Components/types";

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
      show: "list",
    },
  };
};

export const sectionDelete = (id) => {
  return {
    type: SECTIONS_DELETE,
    payload: {
      url: "admin/sections/" + id,
      method: "delete",

      show: "list",
    },
  };
};
