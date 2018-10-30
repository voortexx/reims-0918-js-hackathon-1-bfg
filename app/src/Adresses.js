import React from "react";

const Adresses = props => {
  return (
    <div>
      <p>{props.adresseInfos.properties.label}</p>
      <p>{props.adresseInfos.properties.name}</p>
      <p>{props.adresseInfos.properties.postcode}</p>
      <p>{props.adresseInfos.properties.city}</p>
    </div>
  );
};

export default Adresses;
