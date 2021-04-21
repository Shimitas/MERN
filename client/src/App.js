import React from "react";
import MoviesRouter from "./Router";
// import { showMovies } from './redux/actions';
import { connect } from 'react-redux';
import "./App.css";

const mapStateToProps = (state) => {
  return {...state, movies:state.movies || []}
}

function App() {
  return (
    <div className="App">
      <MoviesRouter />
    </div>
  );
}

export default connect (mapStateToProps , null)(App);
