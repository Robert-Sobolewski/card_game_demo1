import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <h1>Homepage</h1>

        <Link className="btn btn-primary" to="/selectTeam">
          Start game
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
