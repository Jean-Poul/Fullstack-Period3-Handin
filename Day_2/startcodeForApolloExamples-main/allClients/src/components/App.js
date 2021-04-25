import React from "react";
import "../App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


import AddFriend from "./Mutations";
import GettingStarted from "./GettingStarted"
import Queries from "./Queries"
import Home from "./Home"

//This is meant to point to the simpel allServers API, which include a graphQL endpoint for all the exercises
const URI = "http://localhost:4000/graphql"

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/gettingStarted">Getting Started</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/queries">Queries</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/mutations">Mutations</NavLink>
          </li>
        </ul>

        <hr />
        <ApolloProvider client={client}>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/gettingStarted">
                <GettingStarted />
              </Route>
              <Route path="/queries">
                <Queries />
              </Route>
              <Route path="/mutations">
                <AddFriend allowEdit={true} />
              </Route>

            </Switch>
          </div>
        </ApolloProvider>
      </div>
    </Router>
  );
}
