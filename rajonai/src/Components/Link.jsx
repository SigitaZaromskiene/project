import { useContext } from "react";
import { Store } from "../store";
import { navigate } from "../actions";

function Link({ to, children, className }) {
  const { dispatch } = useContext(Store);
  const go = (e) => {
    e.preventDefault();
    dispatch(navigate(to));
  };
  return (
    <a href={to} onClick={go} className={className}>
      {children}
    </a>
  );
}

export default Link;
