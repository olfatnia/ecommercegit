import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>
      BBC
    </h1>
  </div>
);


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}


export default App;
