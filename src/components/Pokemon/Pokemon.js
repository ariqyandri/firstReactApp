import React from "react";

import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "Awesome Pokemon" : "Basic"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((abilities) => {
          return <li className="list-group-item">{abilities}</li>;
        })}
      </ul>
    </div>
  );
}
