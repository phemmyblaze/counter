import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./album.css";

import "bootstrap/dist/js/bootstrap.min.js";
import err from "./error.jpg";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.moviesResult = [];

    this.state = {
      movies: [],
    };
  }

  render() {
    axios
      .get("http://www.omdbapi.com/?s=Spiderman&apikey=81e3fca8")
      .then((results) => {
        // console.log(results);

        this.setState({
          movies: results.data.Search,
        });

        this.moviesResult = this.state.movies.map((movie, index) => {
          let photo = movie.Poster != "N/A" ? movie.Poster : err;
          return (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img src={photo} />

                <div className="card-body">
                  <p className="card-text">{movie.Title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    });

    return (
      <div>
        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">
                    Add some information about the album below, the author, or
                    any other background context. Make it a few sentences long
                    so folks can pick up some informative tidbits. Then, link
                    them off to some social networking sites or contact
                    information.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-white">
                        Follow on Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Like on Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Email me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <strong>Movies Base</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1>Movies Base</h1>
              <p className="lead text-muted">
                Access all the movies that you love in one place...
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Get Started
                </a>
              </p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">{this.moviesResult}</div>
            </div>
          </div>
        </main>

        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>
              Album example is &copy; Bootstrap, but please download and
              customize it for yourself!
            </p>
            <p>
              New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
              <a href="/docs/4.6/getting-started/introduction/">
                getting started guide
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
