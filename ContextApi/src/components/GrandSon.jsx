import { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

const GrandSon = () => {
  const secret = useContext(FamilyContext);
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
