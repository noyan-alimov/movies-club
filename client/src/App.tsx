import React, { FunctionComponent } from 'react';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import AddMoviePage from './pages/AddMoviePage';
import HomePage from './pages/HomePage';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Jumbotron>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/add-movie' component={AddMoviePage} />
        </Switch>
      </Jumbotron>
    </BrowserRouter>
  );
}

export default App;
