import NavBar from "../NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Registration from "../Registration/Registration";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={styles.wrapper}>
        <Switch>
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
