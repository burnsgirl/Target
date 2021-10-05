import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CharitySearch from "./Pages/CharitySearch/CharitySearch";
import AddCharity from "./Pages/AddCharity/AddCharity";

function App() {
  return (
    <Router>

      <Switch>
  
        <Route exact path="/" component={CharitySearch} />
        <Route exact path="/addcharity" component={AddCharity} />
    
        {/* <Route path="*" component={Error} /> */}
        
        
      </Switch>

  </Router>
  );
}

export default App;
