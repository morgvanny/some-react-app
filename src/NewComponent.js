import React from "react";

export default function NewComponent(props) {
  return (
    <div className="NewComponent">
      <h1 style={{ backgroundColor: props.color }}>
        This is a {props.color} h1
      </h1>
      <p>{props.extraText}</p>
    </div>
  );
}
