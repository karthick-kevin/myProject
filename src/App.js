
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./component/login";
import Signup from "./component/signup";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
