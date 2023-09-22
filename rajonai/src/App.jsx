import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/Styles/App.scss";
import Home from "./Pages/Home";
import { useContext } from "react";
import { Store } from "./store";

function App() {
  const { page } = useContext(Store);

  switch (page) {
    case "home":
      return <Home></Home>;
    default:
      <Home></Home>;
  }

  return <div className="main-container"></div>;
}

export default App;
