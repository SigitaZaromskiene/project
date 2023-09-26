import {
  NAVIGATE,
  SECTIONS_LIST,
  SECTIONS_CREATE,
  SECTIONS_DELETE,
  SECTIONS_SHOW_EDIT,
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

export const sectionShowEdit = (id) => {
  return {
    type: SECTIONS_SHOW_EDIT,
    payload: {
      url: "admin/sections/edit/" + id,
      method: "get",
      page: "edit",
    },
  };
};
