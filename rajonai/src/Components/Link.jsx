import { useContext } from "react";
import { Store } from "../store";
import { navigate } from "../actions";

function Link({ to, children, className, show }) {
  const { dispatch, actionsList } = useContext(Store);
  const go = (e) => {
    e.preventDefault();
    window.location.hash = to || show;

    if (to) {
      dispatch(navigate(to));
    } else {
      dispatch(actionsList[show]());
    }
  };
  return (
    <a href={to ?? show} onClick={go} className={className}>
      {children}
    </a>
  );
}

export default Link;
