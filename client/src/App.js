import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
