import { useContext } from "react";
import { Store } from "../store";
import { navigate } from "../actions";

function Link({ to, children, className, action }) {
  const { dispatch, actionsList } = useContext(Store);
  const go = (e) => {
    e.preventDefault();
    window.location.hash = to || action;

    if (to) {
      dispatch(navigate(to));
    } else {
      dispatch(actionsList[action]());
    }
  };
  return (
    <a href={to ?? action} onClick={go} className={className}>
      {children}
    </a>
  );
}

export default Link;
