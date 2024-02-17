import React, { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

const Children = () => {
  const secret = useContext(FamilyContext);
  return (
    <>
      <div className="children">
        <h2>Children</h2>
        <h3>{`Children family name ${secret.familyName}`}</h3>
        <GrandSon />
        <GrandDaughter />
      </div>
    </>
  );
};

export default Children;
