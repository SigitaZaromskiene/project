import { NAVIGATE } from "./Components/types";

export const navigate = (to) => {
  return {
    type: NAVIGATE,
    payload: {
      to,
    },
  };
};
