import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Games from "./views/Games";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/games">
            <Games />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
