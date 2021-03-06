import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './components/Header'
import Login from './components/Login'
import Users from './components/Users'
import './App.css'
function App() {
  return (
    // <div className="App">
       <Router>
     <Header />
    
     <Switch>
     <Route path="/login" component={Login} />
     </Switch>
     <Users />
     </Router>
    // </div>
  );
}

export default App;
