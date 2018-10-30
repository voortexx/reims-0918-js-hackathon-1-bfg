import React from "react";

const Adresses = props => {
  return (
    <div>
      <p>{props.adresse.properties.label}</p>
      <p>{props.adresse.properties.name}</p>
      <p>{props.adresse.properties.postcode}</p>
      <p>{props.adresse.properties.city}</p>
    </div>
  );
};

export default Adresses;
