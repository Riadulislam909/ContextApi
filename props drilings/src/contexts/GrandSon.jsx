import React from "react";

const GrandSon = ({ secret }) => {
  return (
    <>
      <div className="gson">
        <h2>GrandSon</h2>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    </>
  );
};

export default GrandSon;
