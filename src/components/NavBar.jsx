import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Fully Stacked</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/html">Html</Link>
        </li>
        <li>
          <Link to="/css">Css</Link>
        </li>
        <li>
          <Link to="/js">JavaScript</Link>
        </li>
        <li>
          <Link to="/api">Api</Link>
        </li>
        <li>
          <Link to="/node">Node</Link>
        </li>
        <li>
          <Link to="/express">Express</Link>
        </li>
        <li>
          <Link to="/sql">SQL</Link>
        </li>
        <li>
          <Link to="/orm">ORM</Link>
        </li>
        <li>
          <Link to="/nosql">MongoDB</Link>
        </li>
        <li>
          <Link to="/oop">OOP</Link>
        </li>
        <li>
          <Link to="/pwa">Pwa</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/graphql">GraphQL</Link>
        </li>
        <li>
          <Link to="/compsci">Computer Science</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
