import React, { Component, useState } from "react";

const BodyPart = () => {
    const [bodyParts, setBodyParts] = useState(['apple', 'banana', 'cherry'])
  return (
    <div>
      <div>
        {bodyParts.map((bodyPart, index) => (
          <li key={index}>{bodyPart}</li>
        ))}
      </div>
      <div class="custom-select">
        <select>
          <option value="0">Chest:</option>
          <option value="1">Bicep</option>
          <option value="2">Tricep</option>
          <option value="3">Arms</option>
          <option value="4">Core</option>
          <option value="5">Legs</option>
        </select>
      </div>
    </div>
  );
};
export default BodyPart;
