import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar/navigation';
import Hero from './components/Hero/hero';
import Contacts from './components/Contacts/contacts';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/Register/register';
import tables from './components/FormTables/tables';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Table" component={tables}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;