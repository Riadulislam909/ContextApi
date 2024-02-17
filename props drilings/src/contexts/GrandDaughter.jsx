import React from "react";

const GrandDaughter = ({ secret }) => {
  return (
    <>
      <div className="gdaughter">
        <h2>GrandDaughter</h2>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    </>
  );
};

export default GrandDaughter;
