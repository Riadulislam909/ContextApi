import React from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

const Children = ({ secret }) => {
  return (
    <>
      <div className="children">
        <h2>Children</h2>
        <h3>{`Children family name ${secret.familyName}`}</h3>
        <GrandSon secret={secret} />
        <GrandDaughter secret={secret} />
      </div>
    </>
  );
};

export default Children;
