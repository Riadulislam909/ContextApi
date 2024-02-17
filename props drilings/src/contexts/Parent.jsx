import React from "react";
import Children from "./Children";

const Parent = ({ secret }) => {
  return (
    <>
      <div className="parent">
        <h2>Parents</h2>
        <h3>{`Family Name is: ${secret.familyName}`}</h3>
        <p>{secret.onlyParentCanSee()}</p>
        <Children secret={secret} />
      </div>
    </>
  );
};

export default Parent;
