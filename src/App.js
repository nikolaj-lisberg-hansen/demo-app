import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountriesPage from './pages/CountriesPage'
import CountriesCodePage from './pages/CountriesCodePage'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/countries/:code" render={props => <CountriesCodePage {...props} />} />
      <Route path="/countries/" component={CountriesPage} />
    </Switch>
    </div>
  );
}

export default App;
