import { Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import RegistrationForm from "./Pages/RegistrationForm";

function App() {
  return (
    <Switch>
      <Route exact path="/registration" component={RegistrationForm} />
      <Route path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
