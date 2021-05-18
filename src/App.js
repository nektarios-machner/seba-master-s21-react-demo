import SEBAList from "./components/SEBAList";
import { Switch, Route } from "react-router-dom";
import ListMgmt from "./views/ListMgmt";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <h1>SEBA MASTER DEMO</h1>
      <Switch>
        <Route path="/" exact>
          <SEBAList />
        </Route>
        <Route path="/list-mgmt">
          <ListMgmt />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
