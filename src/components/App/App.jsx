import NavBar from "../NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./App.module.css";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuth } = useSelector((state) => state.user);

  console.log("isAuth: ", isAuth);

  return (
    <BrowserRouter>
      <NavBar />
      <div className={styles.wrapper}>
        {!isAuth ? (
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        ) : (
          <div>Wrlcome</div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
