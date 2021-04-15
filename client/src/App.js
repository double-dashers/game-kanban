import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/">
            <div>Home route here</div>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
