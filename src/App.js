import React from 'react';
import { Route } from "react-router-dom";
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

  <section className="jumbotron text-center todo-jumbotron">
    <div className="container">
      <h1 className="jumbotron-heading">Todo Demo</h1>
      <p className="lead text-muted">This demo is just portfolio purpose only. I'm not intend to sell this react app. This todo app can do basic todo's function.</p>
      <p className="lead text-muted">Notes: This todo react app is not yet responsive. I have a plan but don't have a time yet. There are some features
      too that not yet available like the notification and even the alert message. </p>
      <p>
        <a href="/" className="btn btn-primary m-2">Github</a>
        <a href="/" className="btn btn-secondary m-2">Documentation</a>
      </p>
    </div>
  </section>

  <div className="album py-5 bg-light">
    <div className="container">
        <Route path="/" exact component={() => <Home />} />
    </div>
  </div>

</main>
<Footer/>
    </div>
  );
}

export default App;
