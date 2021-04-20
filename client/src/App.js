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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
