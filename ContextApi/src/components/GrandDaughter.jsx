import { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

const GrandDaughter = () => {
  const secret = useContext(FamilyContext);
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
