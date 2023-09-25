import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/Styles/App.scss";
import Home from "./Pages/Home";
import { useContext } from "react";
import { Store } from "./store";
import Nav from "./Components/Nav";
import Create from "./Pages/Sections/Create";
import Login from "./Pages/Login";
import List from "./Pages/Sections/List";

function App() {
  const { page, pageTop } = useContext(Store);

  return (
    <>
      <div className="main-container">
        {pageTop ? <Nav /> : null}

        {page === "home" ? <Home></Home> : null}
        {page === "section-create" ? <Create /> : null}
        {page === "list" ? <List /> : null}
        {page === "login" ? <Login /> : null}
      </div>
    </>
  );
}

export default App;
