import React from "react";
import Parent from "./Parent";

const Family = ({ secret }) => {
  return (
    <>
      <div className="family">
        <h1>Family</h1>
        <Parent secret={secret} />
      </div>
    </>
  );
};

export default Family;
