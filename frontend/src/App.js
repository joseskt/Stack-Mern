import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import CreateNotes from './components/CreateNotes'
import CreateUser from './components/CreateUser'
import NotesList from './components/NotesList'

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-3">
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNotes} />
        <Route path="/create" component={CreateNotes} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
