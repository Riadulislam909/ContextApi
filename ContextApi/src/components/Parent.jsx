import React from "react";
import Children from "./Children";
//receiving data
import { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

const Parent = () => {
  //retrieving the data in secret
  const secret = useContext(FamilyContext);
  return (
    <>
      <div className="parent">
        <h2>Parents</h2>
        <h3>{`Family Name is: ${secret.familyName}`}</h3>
        <p>{secret.onlyParentCanSee()}</p>
        <Children />
      </div>
    </>
  );
};

export default Parent;
