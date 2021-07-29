import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleAnyInput(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value.toUpperCase());
        break;
      case "age":
        if (age != "" || e.target.value != 0) {
          setAge(e.target.value);
        }
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleAnyInput}
          />
        </div>
        <div>
          <label htnlFor="age">Age: </label>
          <input
            id="age"
            name="age"
            type="number"
            value={age}
            onChange={handleAnyInput}
          />
        </div>
      </form>
    </div>
  );
}
