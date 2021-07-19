import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <div className="nav-bar">
            <NavigationBar page="home"/>
          </div>
          <div className="main-content">
            <HomePage />
          </div>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/about"} exact>
          <div className="nav-bar">
            <NavigationBar page="about"/>
          </div>
          <div className="main-content">
            <AboutPage />
          </div>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/portfolios"} exact>
          <div className="nav-bar">
            <NavigationBar page="portfolios"/>
          </div>
          <div className="main-content">
            <PortfoliosPage />
          </div>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/contact"} exact>
          <div className="nav-bar">
            <NavigationBar page="contact"/>
          </div>
          <div className="main-content">
            <ContactPage />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
