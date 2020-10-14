import React from "react";

export default function AwesomeAnimals(props) {
  return (
    <li>
      Awsomeness level {props.level}: {props.name}
    </li>
  );
}
