import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
