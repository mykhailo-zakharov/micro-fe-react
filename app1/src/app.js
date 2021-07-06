import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App2 = React.lazy(() => import("app2/app"));
const App3 = React.lazy(() => import("app3/app"));

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ background: "#b7b7e4", padding: "10px" }}>
        <h1>Host App (React {React.version})</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app2">app2</Link>
          </li>
          <li>
            <Link to="/app3">app3</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/app2">
          <React.Suspense fallback="Loading App">
            <App2/>
          </React.Suspense>
        </Route>
        <Route path="/app3">
          <React.Suspense fallback="Loading App">
            <App3 />
          </React.Suspense>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
