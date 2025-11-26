import React from "react";

import reactLogo from "../assets/react-black-logo.png";

const Home = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h2 className="jumbotron-heading">Hi There!</h2>
        <img className="home-img" src={reactLogo} alt="React Logo" />
        <p className="home-body">
          This is a web app project built using the React framework for a coding class. Its main purpose is to display movie information in a clean and user friendly way. This web app connects to <a href="https://www.themoviedb.org/?language=en-CA" target="_blank">The Movie Database (TMDB)</a> API and pulls real movie data, such as titles, posters, and descriptions. By using React, this web app can load and update information smoothly without needing to refresh the page. Overall, this project helped me practice working with APIs, managing components, and building an interactive website from scratch.


        </p>
      </div>
    </section>
  );
};

export default Home;
