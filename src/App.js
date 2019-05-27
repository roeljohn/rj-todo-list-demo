import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './pages'
import { Header, Footer } from './templates'
import './App.css';
import './album.css'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
<Header/>
<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Todo List Demo</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Github</a>
        <a href="#" class="btn btn-secondary my-2">Documentation</a>
      </p>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <Router>
        <Route path="/" exact component={() => <Home />} />
      </Router>
    </div>
  </div>

</main>
<Footer/>
    </div>
  );
}

export default App;
